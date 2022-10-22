const express = require("express");

const storeData = require("../Controllers/data");

const routerData = express.Router();

routerData.route("/home")
.get(storeData.apicontroller);
module.exports = routerData;