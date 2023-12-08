const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  teamID: {
    type: String,
    required: true
  },
  pokemonName: {
    type: String,
    required: true
  },
  ability: {
    type: String,
    required: true
  },
  item: {
    type: String
  },
  ivHP: {
    type: Number,
    required: true,
    min: 0,
    max: 31
  },
  ivATK: {
    type: Number,
    required: true,
    min: 0,
    max: 31
  },
  ivDEF: {
    type: Number,
    required: true,
    min: 0,
    max: 31
  },
  ivSPA: {
    type: Number,
    required: true,
    min: 0,
    max: 31
  },
  ivSPD: {
    type: Number,
    required: true,
    min: 0,
    max: 31
  },
  ivSPE: {
    type: Number,
    required: true,
    min: 0,
    max: 31
  },
  evHP: {
    type: Number,
    required: true,
    min: 0,
    max: 252
  },
  evATK: {
    type: Number,
    required: true,
    min: 0,
    max: 252
  },
  evDEF: {
    type: Number,
    required: true,
    min: 0,
    max: 252
  },
  evSPA: {
    type: Number,
    required: true,
    min: 0,
    max: 252
  },
  evSPD: {
    type: Number,
    required: true,
    min: 0,
    max: 252
  },
  evSPE: {
    type: Number,
    required: true,
    min: 0,
    max: 252
  },
  moves1: {
    type: String
  },
  moves2: {
    type: String
  },
  moves3: {
    type: String
  },
  moves4: {
    type: String
  },
});

const Member = mongoose.model("Pokemon", memberSchema);

module.exports = mongoose.model("Pokemon", memberSchema);