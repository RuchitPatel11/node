const router = require("express").Router();
const assignment = require("./access/assignment");

router.get("/assignment", assignment);

module.exports = router;
