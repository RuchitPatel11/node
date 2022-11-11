const mongoose = require("mongoose");
const { Schema } = mongoose;

const deptSchema = new Schema({
  name: { type: String, required: true },
});

module.exports.validateDepartment = (department) => {
  const schema = Joi.object({
    name: Joi.string().min(4).max(20).required()
  });
  return schema.validate(department);
};

module.exports.Department = mongoose.model("Department", deptSchema);
