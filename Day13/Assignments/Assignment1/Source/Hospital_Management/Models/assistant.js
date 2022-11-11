const mongoose = require("mongoose");
const { Schema } = mongoose;

const assistantSchema = new Schema({
  name: { type: String, required: true },
  department: { type: Schema.Types.ObjectId, ref: "Department" },
});

module.exports = mongoose.model("Assistant", assistantSchema);
