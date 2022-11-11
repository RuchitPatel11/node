
const empDB = require("../../../DB/empdb");
module.exports = ((req,res) =>{
  const emp = empDB.find((value) => value.uid == req._id);
  res.send({
    uid: emp.uid,
    name: emp.name,
    assignment_status: emp.assignment,
  });
});



