const mongoose = require("mongoose");
const { shinobiSchema } = require("./Shinobi");

const ninjutsuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name of the Jutsu is required."],
  },
  description: {
    type: String,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    creatorId: shinobiSchema,
    required: [true, "Cannot register an unknown origin Jutsu."],
  },
});

module.exports.jutsuModel = mongoose.model("Ninjutsu", ninjutsuSchema);
module.exports.jutsuSchema = ninjutsuSchema;
