const router = require("express").Router();
const fees = require("./access/fees");
const result = require("./access/result");

router.get("/fees", fees.getFees);
router.post("/fees", fees.postFees);

router.get("/result", result.getResult);
router.post("/result", result.postResult);

module.exports = router;
