const Student = require("../../../Models/student");
const User = require("../../../Models/users");

module.exports.getResult = async (req, res) => {
  const user = await User.findOne({ username: req.user.username });
  const student = await Student.findOneAndUpdate(
    { uid: user._id },
    { $set: { uid: user._id } },
    { upsert: true, new: true }
  );
  res.json({ user: user.username, result: student.result });
};

module.exports.postResult = async (req, res) => {
  const body = req.body;
  const user = await User.findOne({ username: req.user.username });
  const student = await Student.findOneAndUpdate(
    { uid: user._id },
    { $set: { result: body.result, uid: user._id } },
    { upsert: true, new: true }
  );
  res.send(student);
};

