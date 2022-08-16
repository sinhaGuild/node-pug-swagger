const mongoose = require("mongoose");
const { jutsuSchema } = require("./Ninjutsu");

const shinobiSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required."],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required."],
  },
  jutsuBio: {
    type: mongoose.Schema.Types.ObjectId,
    jutsus: [jutsuSchema],
    required: [true, "Whats a shinobi with no jutsu?"],
  },
});

module.exports.shinobiModel = mongoose.model("Shinobi", shinobiSchema);
module.exports.shinobiSchema = shinobiSchema;
