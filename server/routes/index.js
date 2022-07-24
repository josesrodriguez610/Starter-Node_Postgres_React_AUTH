const { Router } = require("express");
const router = Router();
const apiIndex = require("./api/index");
const authIndex = require("./auth/index");

/* Api Folder Route */
router.use("/api/v1", apiIndex);

router.use("/auth/v1", authIndex);

module.exports = router;
