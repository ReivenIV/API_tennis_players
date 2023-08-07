const PlayersModel = require("../players/model.js");

// -----------------------
//    Statistics Model
// -----------------------

class StatisticsModel {
  static async getMedianHeight(sexType) {
    const resPlayers = await PlayersModel.getPlayersBySex(sexType);

    //In case there are some Heights values in wrong format or undefined we take them out
    const allPlayersFiltered = resPlayers
      .filter((eachValue) => typeof eachValue.data.height === "number")
      .map((obj) => obj.data.height); // Extract numeric heights;
    const len = allPlayersFiltered.length;

    // Sort the array numerically
    const arrSort = allPlayersFiltered.slice().sort((a, b) => a - b);
    const mid = Math.floor(len / 2);
    // Calculate median
    const median = len % 2 === 0 ? (arrSort[mid - 1] + arrSort[mid]) / 2 : arrSort[mid];

    let response = {
      sex_type: sexType,
      count_players: resPlayers.length,
      median: median,
    };
    return response;
  }

  static async getCountryBestRatio(sexType) {
    const resPlayers = await PlayersModel.getPlayersBySex(sexType);

    // Initialize an object to store country statistics (matches played and won)
    const countryStats = {};

    // Iterate through the player data
    resPlayers.forEach((player) => {
      const country = player.country.code;
      const matchesWon = player.data.last.filter((result) => result === 1).length;
      const matchesPlayed = player.data.last.length;

      if (!countryStats[country]) {
        countryStats[country] = { matchesPlayed: 0, matchesWon: 0 };
      }

      countryStats[country].matchesPlayed += matchesPlayed;
      countryStats[country].matchesWon += matchesWon;
    });

    // Find the country with the highest win ratio
    let highestWinRatio = 0;
    let countryWithHighestWinRatio = "";

    for (const country in countryStats) {
      const stats = countryStats[country];
      const winRatio = stats.matchesWon / stats.matchesPlayed;
      if (winRatio > highestWinRatio) {
        highestWinRatio = winRatio;
        countryWithHighestWinRatio = country;
      }
    }

    return countryWithHighestWinRatio;
  }

  static async getAvgImc(sexType) {
    const resPlayers = await PlayersModel.getPlayersBySex(sexType);

    const totalPlayers = resPlayers.length;
    let totalIMC = 0;

    for (let i = 0; i < totalPlayers; i++) {
      const eachPlayer = resPlayers[i];
      // we convert gr to kg
      const weightInKg = eachPlayer.data.weight / 1000;
      // we convert cm to m
      const heightInM = eachPlayer.data.height / 100;

      // IMC = Weight(kg) / height(m)²
      const playerIMC = weightInKg / heightInM ** 2;
      totalIMC += playerIMC;
    }

    const averageIMC = totalIMC / totalPlayers;
    return parseFloat(averageIMC.toFixed(3));
  }

  static async getStatistics(sexType) {
    let resAvgHeight = await StatisticsModel.getMedianHeight(sexType);
    let resAvgImc = await StatisticsModel.getAvgImc(sexType);
    let resBestCountry = await StatisticsModel.getCountryBestRatio(sexType);

    if (!sexType || (sexType !== "F" && sexType !== "M" && sexType !== "All")) {
      sexType = "sexType wrong format, default type is All";
    }
    const response = {
      sex_type: sexType,
      amount_players: resAvgHeight.count_players,
      best_country_by_ratio: resBestCountry,
      median_height: resAvgHeight.median,
      avg_imc: resAvgImc,
    };

    return response;
  }
}

module.exports = StatisticsModel;
