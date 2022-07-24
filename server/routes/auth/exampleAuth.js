const { Router } = require("express");
const exampleAuth = Router();

/*
 * /v1/auth/example
 */
exampleAuth.use("/example", (req, res) => {
  res.send("Hi Auth");
});

module.exports = {
  exampleAuth,
};
