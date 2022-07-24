const { Router } = require("express");
const apiIndex = Router();
const { exampleApi } = require("./exampleApi");

/* GET home page. */
apiIndex.use("/", exampleApi);

module.exports = apiIndex;
