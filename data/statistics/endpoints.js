const errorHandler = require("../../midlewares/errorHandler.js");
const PlayersModel = require("../players/model.js");
const StatisticsModel = require("./model.js");

// ---------------------------
//    Statistics Endpoints
// ---------------------------

module.exports = (app) => {
  app.get("/api/v1/statistics/all", errorHandler, async (req, res, next) => {
    try {
      const resGetAll = await StatisticsModel.getStatistics("All");
      const resGetF = await StatisticsModel.getStatistics("F");
      const resGetM = await StatisticsModel.getStatistics("M");

      let response = [resGetAll, resGetF, resGetM];

      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  });

  app.get(
    "/api/v1/statistics/by_sex_type/:sex_type",
    errorHandler,
    async (req, res, next) => {
      try {
        const resGet = await StatisticsModel.getStatistics(req.params.sex_type);

        return res.status(200).json(resGet);
      } catch (error) {
        next(error);
      }
    },
  );
};
