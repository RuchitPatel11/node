const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  role: { type: String, enum: ["student", "employee"] },
});

module.exports = mongoose.model("User", userSchema);
