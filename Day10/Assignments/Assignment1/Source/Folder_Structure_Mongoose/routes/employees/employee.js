const router = require("express").Router();
const assignment = require("./access/assignment");

router.get("/assignment", assignment.getAssignment);
router.post("/assignment", assignment.postAssignment);

module.exports = router;
