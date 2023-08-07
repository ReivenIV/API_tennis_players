const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
require("dotenv").config({path:"./.env"});

const app = express();
app.use(cors());

app.use(
  fileUpload({
    createParentPath: true,
  }),
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

const PORT = process.env.API_PORT || 5000;

const playersEndpoints = require("./data/players/endpoints.js");
const statisticsEndpoints = require("./data/statistics/endpoints.js");

playersEndpoints(app);
statisticsEndpoints(app);

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
