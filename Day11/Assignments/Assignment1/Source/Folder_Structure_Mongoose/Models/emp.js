const mongoose = require("mongoose");
const { Schema } = mongoose;

const empSchema = new Schema({
  uid: { type: Schema.Types.ObjectId, ref: "User" },
  name: String,
  assignment: {
    title: { type: String },
    status: { type: String },
  },
});

module.exports = mongoose.model("Employee", empSchema);
