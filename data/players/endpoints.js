const errorHandler = require("../../midlewares/errorHandler.js");
const PlayersModel = require("./model.js");

// ---------------------------
//    Players Endpoints
// ---------------------------

module.exports = (app) => {
  app.get("/api/v1/players/all", errorHandler, async (req, res, next) => {
    try {
      const resGet = await PlayersModel.getPlayersByRank();

      if (resGet.lenght === 0) {
        return res.status(200).json({
          msg: "At the moment, we don't have any tennis players in the database. Please come back later and try again.",
        });
      }
      return res.status(200).json(resGet);
    } catch (error) {
      next(error);
    }
  });

  app.get("/api/v1/players/by_id/:player_id", errorHandler, async (req, res, next) => {
    try {
      const resGet = await PlayersModel.getPlayerById(parseInt(req.params.player_id));

      if (!resGet) {
        return res.status(400).json({
          msg: "Data not found please verify your payload and try again",
          received_payload: parseInt(req.params.player_id),
        });
      }
      return res.status(200).json(resGet);
    } catch (error) {
      next(error);
    }
  });

  app.get("/api/v1/players/by_sex_type/:sex_type", errorHandler, async (req, res, next) => {
    try {
      const resGet = await PlayersModel.getPlayersBySex(req.params.player_id);
      if (!resGet) {
        return res.status(400).json({
          msg: "Data not found please verify your payload and try again",
          received_payload: parseInt(req.params.player_id),
        });
      }
      return res.status(200).json(resGet);
    } catch (error) {
      next(error);
    }
  });
};
