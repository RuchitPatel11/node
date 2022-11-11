const Employee = require("../../../Models/emp");
const User = require("../../../Models/users");

module.exports.getAssignment = async (req, res) => {
  const user = await User.findOne({ username: req.user.username });
  const employee = await Employee.findOne({ uid: user._id });
  res.json({ name: employee.name, assignment: employee.assignment });
};

module.exports.postAssignment = async (req, res) => {
  const body = req.body;
  const user = await User.findOne({ username: req.user.username });
  const employee = await Employee.findOneAndUpdate(
    { uid: user._id },
    {
      $set: {
        assignment: {
          title: body.assignment.title,
          status: body.assignment.status,
        },
        uid: user._id,
      },
    },
    { upsert: true, new: true }
  );

  res.send(employee);
};

module.exports.putAssignment = async (req, res) => {
  const body = req.body;
  const user = await User.findOne({ username: req.user.username });
  const employee = await Employee.findOneAndUpdate(
    { uid: user._id },
    {
      $set: {
        assignment: {
          title: body.assignment.title,
          status: body.assignment.status,
        },
        uid: user._id,
      },
    },
    { new: true }
  );

  res.send(employee);
};


module.exports.deleteAssignment = async (req, res) => {
  const user = await User.findOne({ username: req.user.username });
  const employee = await Employee.findOneAndUpdate(
    { uid: user._id },
    {
      $unset: {
        assignment: "",
      },
    },
    { upsert: true, new: true }
  );

  res.send(employee);
};
