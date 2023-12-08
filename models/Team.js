const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  // _id: will be automatically generated
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30
  },
  userID: {
    type: String,
    required: true
  },
});

const Team = mongoose.model("Team", teamSchema);

exports.Team = Team;