const types = [
  { 
    TypeID: "normal",
    effect: {
      double: [],
      noDamage: ["ghost"],
      half: ["rock", "steel"],
      neutral: ['normal', 'fire', 'water', 'grass', 'electric', 'ice', 'ground', 'flying', 'fighting', 'fairy', 'dragon', 'bug', 'dark', 'psychic', 'poison']
    }
  },
  {
    TypeID: "fire",
    effect: {
      double: ["grass", "ice", "bug", "steel"],
      noDamage: [],
      half: ["fire", "water", "dragon", "rock"],
      neutral: ['normal', 'electric', 'ground', 'flying', 'figthing', 'fairy', 'ghost', 'dark', 'psychic', 'poison']
    }
  },
  {
    TypeID: "water",
    effect: {
      double: ["fire", "ground", "rock"],
      noDamage: [],
      half: ["water", "grass", "dragon"],
      neutral: ['normal', 'electric', 'ice', 'flying', 'fighting', 'steel', 'fairy', 'bug', 'ghost', 'dark', 'psychic', 'poison']
    }
  },
  {
    TypeID: "grass",
    effect: {
      double: ["water", "ground", "rock"],
      noDamage: [],
      half: ["fire", "grass", "poison", "flying", "bug", "dragon", "steel"],
      neutral: ['normal', 'electric', 'ice', 'fighting', 'fairy', 'ghost', 'dark', 'psychic']
    }
  },
  {
    TypeID: "electric",
    effect: {
      double: ["water", "flying"],
      noDamage: ["ground"],
      half: ["grass", "electric", "dragon"],
      neutral: ['normal', 'fire', 'ice', 'rock', 'fighting', 'steel', 'fairy', 'bug', 'ghost', 'dark', 'psychic', 'poison']
    }
  },
  {
    TypeID: "ice",
    effect: {
      double: ["grass", "ground", "flying", "dragon"],
      noDamage: [],
      half: ["fire", "water", "ice", "steel"],
      neutral: ['normal', 'electric', 'rock', 'fighting', 'fairy', 'bug', 'ghost', 'dark', 'psychic','poison']
    }
  },
  {
    TypeID: "fighting",
    effect: {
      double: ["normal", "ice", "rock", "dark", "steel"],
      noDamage: ["ghost"],
      half: ["poison", "flying", "psychic", "bug", "fairy"],
      neutral: ['fire', 'water', 'grass', 'electric', 'ground', 'fighting', 'dragon']
    }
  },
  {
    TypeID: "poison",
    effect: {
      double: ["grass", "fairy"],
      noDamage: ["steel"],
      half: ["poison", "ground", "rock", "ghost"],
      neutral: ['normal', 'fire', 'water', 'electric', 'ice', 'flying', 'figthing', 'dragon', 'dark', 'psychic', 'bug']
    }
  },
  {
    TypeID: "ground",
    effect: {
      double: ["fire", "electric", "poison", "rock", "steel"],
      noDamage: ["flying"],
      half: ["grass", "bug"],
      neutral: ['normal', 'water', 'ice', 'ground', 'fighting', 'fairy', 'dragon', 'ghost', 'dark', 'psychic']
    }
  },
  {
    TypeID: "flying",
    effect: {
      double: ["grass", "fighting", "bug"],
      noDamage: [],
      half: ["electric", "rock", "steel"],
      neutral: ['normal', 'fire', 'water', 'ice', 'ground', 'flying', 'fairy', 'dragon', 'ghost', 'dark', 'psychic', 'poison']
    }
  },
  {
    TypeID: "psychic",
    effect: {
      double: ["fighting", "poison"],
      noDamage: ["dark"],
      half: ["psychic", "steel"],
      neutral: ['normal', 'fire', 'water', 'grass', 'electric', 'ice', 'rock', 'ground', 'flying', 'fairy', 'dragon', 'bug', 'ghost']
    }
  },
  {
    TypeID: "bug",
    effect: {
      double: ["grass", "psychic", "dark"],
      noDamage: [],
      half: ["fire", "fighting", "poison", "flying", "ghost", "steel", "fairy"],
      neutral: ['normal', 'bug', 'water', 'electric', 'dragon', 'rock', 'ground', 'ice']
    }
  },
  {
    TypeID: "rock",
    effect: {
      double: ["fire", "ice", "flying", "bug"],
      noDamage: [],
      half: ["fighting", "ground", "steel"],
      neutral: ['normal', 'water', 'grass', 'electric', 'psychic', 'dark', 'dragon', 'fairy', 'poison', 'ghost', 'rock']
    }
  },
  {
    TypeID: "ghost",
    effect: {
      double: ["psychic", "ghost"],
      noDamage: ["normal"],
      half: ["dark"],
      neutral: ['fire', 'water', 'grass', 'electric', 'ice', 'rock', 'ground', 'steel', 'fighting', 'dragon', 'fairy', 'bug', 'flying', 'poison']
    }
  },
  {
    TypeID: "dragon",
    effect: {
      double: ["dragon"],
      noDamage: ["fairy"],
      half: ["steel"],
      neutral: ['normal', 'fire', 'water', 'grass', 'electric', 'ice', 'flying', 'rock', 'ground', 'poison', 'bug', 'psychic', 'fighting', 'dark', 'ghost']
    }
  },
  {
    TypeID: "dark",
    effect: {
      double: ["psychic", "ghost"],
      noDamage: [],
      half: ["fighting", "dark", "fairy"],
      neutral: ['normal', 'fire', 'water', 'grass', 'ice', 'electric', 'rock', 'ground', 'flying', 'bug', 'dragon', 'steel', 'poison']
    }
  },
  {
    TypeID: "steel",
    effect: {
      double: ["ice", "rock", "fairy"],
      noDamage: [],
      half: ["fire", "water", "electric", "steel"],
      neutral: ['normal', 'grass', 'fighting', 'flying', 'psychic', 'dark', 'ghost', 'ground', 'dragon', 'bug', 'poison']
    }
  },
  {
    TypeID: "fairy",
    effect: {
      double: ["fighting", "dragon", "dark"],
      noDamage: [],
      half: ["fire", "poison", "steel"],
      neutral: ['fairy', 'normal', 'water', 'grass', 'psychic', 'bug', 'electric', 'ice', 'flying', 'ghost', 'rock', 'ground']
    }
  }
]

module.exports = types