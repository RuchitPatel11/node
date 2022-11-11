const mongoose = require("mongoose");
const { Schema } = mongoose;

const drugSchema = new Schema({
  name: { type: String, required: true },
});

module.exports.validDrug = (drug) =>{
  const schema = Joi.object({
    name: Joi.string().min(4).max(20).required()
  });
  return schema.validate(drug);
}
module.exports.Drug = mongoose.model("Drug", drugSchema);
