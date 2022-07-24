const { Router } = require("express");
const apiIndex = Router();
const { exampleAuth } = require("./exampleAuth");

/* GET home page. */
apiIndex.use("/", exampleAuth);

module.exports = apiIndex;
