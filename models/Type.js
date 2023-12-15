const types = [
  { 
    TypeID: "normal",
    effect: {
      double: [],
      noDamage: ["ghost"],
      half: ["rock", "steel"],
      
    }
  },
  {
    TypeID: "fire",
    effect: {
      double: ["grass", "ice", "bug", "steel"],
      noDamage: [],
      half: ["fire", "water", "dragon", "rock"]
    }
  },
  {
    TypeID: "water",
    effect: {
      double: ["fire", "ground", "rock"],
      noDamage: [],
      half: ["water", "grass", "dragon"]
    }
  },
  {
    TypeID: "grass",
    effect: {
      double: ["water", "ground", "rock"],
      noDamage: [],
      half: ["fire", "grass", "poison", "flying", "bug", "dragon", "steel"]
    }
  },
  {
    TypeID: "electric",
    effect: {
      double: ["water", "flying"],
      noDamage: ["ground"],
      half: ["grass", "electric", "dragon"]
    }
  },
  {
    TypeID: "ice",
    effect: {
      double: ["grass", "ground", "flying", "dragon"],
      noDamage: [],
      half: ["fire", "water", "ice", "steel"]
    }
  },
  {
    TypeID: "fighting",
    "fighting": {
      double: ["normal", "ice", "rock", "dark", "steel"],
      noDamage: ["ghost"],
      half: ["poison", "flying", "psychic", "bug", "fairy"]
    }
  },
  {
    TypeID: "poison",
    effect: {
      double: ["grass", "fairy"],
      noDamage: ["steel"],
      half: ["poison", "ground", "rock", "ghost"]
    }
  },
  {
    TypeID: "ground",
    effect: {
      double: ["fire", "electric", "poison", "rock", "steel"],
      noDamage: ["flying"],
      half: ["grass", "bug"]
    }
  },
  {
    TypeID: "flying",
    effect: {
      double: ["grass", "fighting", "bug"],
      noDamage: [],
      half: ["electric", "rock", "steel"]
    }
  },
  {
    TypeID: "psychic",
    effect: {
      double: ["fighting", "poison"],
      noDamage: ["dark"],
      half: ["psychic", "steel"]
    }
  },
  {
    TypeID: "bug",
    effect: {
      double: ["grass", "psychic", "dark"],
      noDamage: [],
      half: ["fire", "fighting", "poison", "flying", "ghost", "steel", "fairy"]
    }
  },
  {
    TypeID: "rock",
    effect: {
      double: ["fire", "ice", "flying", "bug"],
      noDamage: [],
      half: ["fighting", "ground", "steel"]
    }
  },
  {
    TypeID: "ghost",
    effect: {
      double: ["psychic", "ghost"],
      noDamage: ["normal"],
      half: ["dark"]
    }
  },
  {
    TypeID: "dragon",
    effect: {
      double: ["dragon"],
      noDamage: ["fairy"],
      half: ["steel"]
    }
  },
  {
    TypeID: "dark",
    effect: {
      double: ["psychic", "ghost"],
      noDamage: [],
      half: ["fighting", "dark", "fairy"]
    }
  },
  {
    TypeID: "steel",
    effect: {
      double: ["ice", "rock", "fairy"],
      noDamage: [],
      half: ["fire", "water", "electric", "steel"]
    }
  },
  {
    TypeID: "fairy",
    effect: {
      double: ["fighting", "dragon", "dark"],
      noDamage: [],
      half: ["fire", "poison", "steel"]
    }
  }
]

module.exports = types;