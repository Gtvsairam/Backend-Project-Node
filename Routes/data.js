const express = require("express");

const storeData = require("../Controllers/data");

const routerData = express.Router();

routerData.route("/Content")
.get(storeData.apicontroller);
module.exports = routerData;