const fs = require("fs");
const playersRawData = fs.readFileSync("payloads/players_data/players.json");
const playersParsedData = JSON.parse(playersRawData);

// ------------------------
//    Players Model
// ------------------------

class PlayersModel {
  static async getAllPlayers() {
    return playersParsedData;
  }

  static async getPlayersByRank() {
    const resPlayers = await PlayersModel.getAllPlayers();
    let allPlayers = resPlayers.players;
    allPlayers.sort((a, b) => b.data.rank - a.data.rank);
    return allPlayers;
  }

  static async getPlayerById(playerId) {
    const resPlayers = await PlayersModel.getAllPlayers();

    let allPlayers = resPlayers.players;
    let resPlayerData = allPlayers.find((item) => item.id === playerId);
    if (resPlayerData === undefined) {
      return (resPlayerData = false);
    }

    return resPlayerData;
  }

  static async getPlayersBySex(sexType) {
    const resPlayers = await PlayersModel.getAllPlayers();

    const allPlayers = resPlayers.players;
    if (!sexType || sexType === "all" || (sexType !== "F" && sexType !== "M")) {
      return allPlayers;
    }
    const resBySex = allPlayers.filter((item) => item.sex === sexType);
    return resBySex;
  }
}

module.exports = PlayersModel;
