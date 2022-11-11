const router = require("express").Router();
const fees = require("./access/fees");
const result = require("./access/result");

router.get("/fees", fees);
router.get("/result", result);

module.exports = router;
