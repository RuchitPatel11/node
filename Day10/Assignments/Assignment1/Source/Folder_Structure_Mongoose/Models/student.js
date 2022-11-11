const mongoose = require("mongoose");
const { Schema } = mongoose;

const stdSchema = new Schema({
  uid: { type: Schema.Types.ObjectId, ref: "User" },
  name: String,
  fees: String,
  result: String,
});

module.exports = mongoose.model("Student", stdSchema);
    