const moves = [
  {
    movesID: "001",
    name: "Earthquake",
    type: "ground",
    category: "physical",
    power: "100",
    accuracy: "100",
    priority: "0",
    pp: "10",
    effect: {
      desc: "Power is doubled if opponent is underground from using Dig.",
      target: "self", // target of the effect not the damage
      action: "-",
      chance: "-"
    }
  },
  {
    movesID: "002",
    name: "Earth Power",
    type: "ground",
    category: "special",
    power: "90",
    accuracy: "100",
    priority: "0",
    pp: "10",
    effect: {
      desc: "May lower opponent's Special Defense.",
      target: "opponent",
      action: "spdstack -= 1",
      chance: "10%"
    }
  },
  {
    movesID: "003",
    name: "Flamethrower",
    type: "fire",
    category: "special",
    power: "90",
    accuracy: "100",
    priority: "0",
    pp: "15",
    effect: {
      desc: "May burn opponent.",
      target: "opponent",
      action: "status = burn",
      chance: "10%"
    }
  },
  {
    movesID: "004",
    name: "Flame Charge",
    type: "fire",
    category: "physical",
    power: "50",
    accuracy: "100",
    priority: "0",
    pp: "20",
    effect: {
      desc: "Raises user's Speed.",
      target: "self",
      action: "speedstack += 1",
      chance: "100%"
    }
  },
  {
    movesID: "005",
    name: "Flash Cannon",
    type: "steel",
    category: "special",
    power: "80",
    accuracy: "100",
    priority: "0",
    pp: "10",
    effect: {
      desc: "May lower opponent's Special Defense.",
      target: "opponent",
      action: "spdstack -= 1",
      chance: "10%"
    }
  }
]

module.exports = moves;