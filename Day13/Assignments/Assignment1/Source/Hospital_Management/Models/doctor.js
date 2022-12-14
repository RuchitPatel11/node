const mongoose = require("mongoose");
const { Schema } = mongoose;

const docterSchema = new Schema({
  name: { type: String, required: true },
  department: { type: Schema.Types.ObjectId, ref: "Department" },
});

module.exports = mongoose.model("Doctor", doctorSchema);
