const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
    unique: true
  },
  userID: {
    type: String,
    required: true
  },
});

const Team = mongoose.model("Team", teamSchema);

module.exports = mongoose.model("Team", teamSchema);