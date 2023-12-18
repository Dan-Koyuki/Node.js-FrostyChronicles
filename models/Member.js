const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  teamID: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    min: 1,
    max: 100
  },
  pokemonName: {
    type: String,
    required: true,
  },
  ability: {
    type: String,
  },
  item: {
    type: String,
  },
  ivHP: {
    type: Number,
    min: 0,
    max: 31,
  },
  ivATK: {
    type: Number,
    min: 0,
    max: 31,
  },
  ivDEF: {
    type: Number,
    min: 0,
    max: 31,
  },
  ivSPA: {
    type: Number,
    min: 0,
    max: 31,
  },
  ivSPD: {
    type: Number,
    min: 0,
    max: 31,
  },
  ivSPE: {
    type: Number,
    min: 0,
    max: 31,
  },
  evHP: {
    type: Number,
    min: 0,
    max: 252,
  },
  evATK: {
    type: Number,
    min: 0,
    max: 252,
  },
  evDEF: {
    type: Number,
    min: 0,
    max: 252,
  },
  evSPA: {
    type: Number,
    min: 0,
    max: 252,
  },
  evSPD: {
    type: Number,
    min: 0,
    max: 252,
  },
  evSPE: {
    type: Number,
    min: 0,
    max: 252,
  },
  moves1: {
    type: String,
  },
  moves2: {
    type: String,
  },
  moves3: {
    type: String,
  },
  moves4: {
    type: String,
  },
});

const Member = mongoose.model("Pokemon", memberSchema);

module.exports = mongoose.model("Pokemon", memberSchema);
