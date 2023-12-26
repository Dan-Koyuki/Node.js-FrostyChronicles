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
  ivHP: {
    type: Number,
    min: 0,
    max: 31,
    default: 0
  },
  ivATK: {
    type: Number,
    min: 0,
    max: 31,
    default: 0
  },
  ivDEF: {
    type: Number,
    min: 0,
    max: 31,
    default: 0
  },
  ivSPA: {
    type: Number,
    min: 0,
    max: 31,
    default: 0
  },
  ivSPD: {
    type: Number,
    min: 0,
    max: 31,
    default: 0
  },
  ivSPE: {
    type: Number,
    min: 0,
    max: 31,
    default: 0
  },
  evHP: {
    type: Number,
    min: 0,
    max: 252,
    default: 0
  },
  evATK: {
    type: Number,
    min: 0,
    max: 252,
    default: 0
  },
  evDEF: {
    type: Number,
    min: 0,
    max: 252,
    default: 0
  },
  evSPA: {
    type: Number,
    min: 0,
    max: 252,
    default: 0
  },
  evSPD: {
    type: Number,
    min: 0,
    max: 252,
    default: 0
  },
  evSPE: {
    type: Number,
    min: 0,
    max: 252,
    default: 0
  },
  moves: [],
  spriteFront: String,
  spriteBack: String,
});

const Member = mongoose.model("Pokemon", memberSchema);

module.exports = mongoose.model("Pokemon", memberSchema);
