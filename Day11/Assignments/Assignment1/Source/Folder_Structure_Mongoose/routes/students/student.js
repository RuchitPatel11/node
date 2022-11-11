const router = require("express").Router();
const fees = require("./access/fees");
const result = require("./access/result");

router.get("/fees", fees.getFees);
router.post("/fees", fees.postFees);
router.put("/fees", fees.putFees);
router.delete("/fees", fees.deleteFees);
router.get("/result", result.getResult);
router.post("/result", result.postResult);
router.put("/result", result.putResult);
router.delete("/result", result.deleteResult);

module.exports = router;
