require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
const indexRouter = require("./routes/index");
const database = require("./db/db");
const cors = require("cors");

const app = express();
app.use(express.static(path.join(__dirname, "../client/build")));

// app.use(cors());
app.use(helmet());
app.use(logger("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.get("/", (req, res) => res.send("Node Postgres React"));

app.use("/", indexRouter);

const PORT = process.env.PORT || 8080;

database();

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, async () => {
  console.log(`listening on port: ${PORT}`);
});
