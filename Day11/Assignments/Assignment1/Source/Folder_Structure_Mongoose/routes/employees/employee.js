const router = require("express").Router();
const assignment = require("./access/assignment");

router.get("/assignment", assignment.getAssignment);
router.post("/assignment", assignment.postAssignment);
router.put("/assignment", assignment.putAssignment);
router.delete("/assignment", assignment.deleteAssignment);

module.exports = router;
