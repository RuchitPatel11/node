const Student = require("../../../Models/student");
const User = require("../../../Models/users");


module.exports.getFees = async (req, res) => {
  const user = await User.findOne({ username: req.user.username });
  const student = await Student.findOne({ uid: user._id });
  res.json({ name: student.name, fees:student.fees});
};

module.exports.postFees = async (req, res) => {
  const body = req.body;
  const user = await User.findOne({ username: req.user.username });
  const student = await Student.findOneAndUpdate({uid: user._id}, {$set: {fees: body.fees, uid: user._id}}, {upsert:true, new:true})
  res.send(student);
};

module.exports.putFees = async (req, res) => {
  const body = req.body;
  const user = await User.findOne({ username: req.user.username });
  const student = await Student.findOneAndUpdate({uid: user._id}, {$set: {fees: body.fees, uid: user._id}}, {new:true})
  res.send(student);
};

module.exports.deleteFees = async (req, res) => {
  const user = await User.findOne({ username: req.user.username });
  const student = await Student.findOneAndUpdate({uid: user._id}, {$unset: {fees:""}}, {upsert:true, new:true})
  res.send(student);
};