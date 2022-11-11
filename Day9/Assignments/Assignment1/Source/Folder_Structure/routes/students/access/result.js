const stdDB = require("../../../DB/studentdb");
module.exports = (req, res) => {
  const student = stdDB.find((value) => value.uid == req._id);
  res.send({
    uid: student.uid,
    name: student.name,
    std_result: student.std_result,
  });
};
