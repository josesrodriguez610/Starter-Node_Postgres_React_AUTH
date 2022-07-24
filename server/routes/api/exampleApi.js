const { Router } = require("express");
const exampleApi = Router();

/*
 * /api/v1/example
 */
exampleApi.use("/example", (req, res) => {
  res.send("Hi API");
});

module.exports = {
  exampleApi,
};
