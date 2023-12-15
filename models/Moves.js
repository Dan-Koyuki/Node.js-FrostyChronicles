const moves = [
  {
    movesID: "001",
    name: "Pound",
    type: "normal",
    category: "Physical",
    pp: 35,
    power: 40,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "002",
    name: "Karate Chop",
    type: "fighting",
    category: "Physical",
    pp: 25,
    power: 50,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "003",
    name: "Double Slap",
    type: "normal",
    category: "Physical",
    pp: 10,
    power: 15,
    accuracy: 0.85,
    gen: "I"
  },
  {
    movesID: "004",
    name: "Comet Punch",
    type: "normal",
    category: "Physical",
    pp: 15,
    power: 18,
    accuracy: 0.85,
    gen: "I"
  },
  {
    movesID: "005",
    name: "Mega Punch",
    type: "normal",
    category: "Physical",
    pp: 20,
    power: 80,
    accuracy: 0.85,
    gen: "I"
  },
  {
    movesID: "006",
    name: "Pay Day",
    type: "normal",
    category: "Physical",
    pp: 20,
    power: 40,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "007",
    name: "Fire Punch",
    type: "fire",
    category: "Physical",
    pp: 15,
    power: 75,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "008",
    name: "Ice Punch",
    type: "ice",
    category: "Physical",
    pp: 15,
    power: 75,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "009",
    name: "Thunder Punch",
    type: "electric",
    category: "Physical",
    pp: 15,
    power: 75,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "010",
    name: "Scratch",
    type: "normal",
    category: "Physical",
    pp: 35,
    power: 40,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "011",
    name: "Vise Grip",
    type: "normal",
    category: "Physical",
    pp: 30,
    power: 55,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "012",
    name: "Guillotine",
    type: "normal",
    category: "Physical",
    pp: 5,
    power: "—",
    accuracy: 0.3,
    gen: "I"
  },
  {
    movesID: "013",
    name: "Razor Wind",
    type: "normal",
    category: "Special",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "014",
    name: "Swords Dance",
    type: "normal",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "015",
    name: "Cut",
    type: "normal",
    category: "Physical",
    pp: 30,
    power: 50,
    accuracy: 0.95,
    gen: "I"
  },
  {
    movesID: "016",
    name: "Gust",
    type: "flying",
    category: "Special",
    pp: 35,
    power: 40,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "017",
    name: "Wing Attack",
    type: "flying",
    category: "Physical",
    pp: 35,
    power: 60,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "018",
    name: "Whirlwind",
    type: "normal",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "019",
    name: "Fly",
    type: "flying",
    category: "Physical",
    pp: 15,
    power: 90,
    accuracy: 0.95,
    gen: "I"
  },
  {
    movesID: "020",
    name: "Bind",
    type: "normal",
    category: "Physical",
    pp: 20,
    power: 15,
    accuracy: 0.85,
    gen: "I"
  },
  {
    movesID: "021",
    name: "Slam",
    type: "normal",
    category: "Physical",
    pp: 20,
    power: 80,
    accuracy: 0.75,
    gen: "I"
  },
  {
    movesID: "022",
    name: "Vine Whip",
    type: "grass",
    category: "Physical",
    pp: 25,
    power: 45,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "023",
    name: "Stomp",
    type: "normal",
    category: "Physical",
    pp: 20,
    power: 65,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "024",
    name: "Double Kick",
    type: "fighting",
    category: "Physical",
    pp: 30,
    power: 30,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "025",
    name: "Mega Kick",
    type: "normal",
    category: "Physical",
    pp: 5,
    power: 120,
    accuracy: 0.75,
    gen: "I"
  },
  {
    movesID: "026",
    name: "Jump Kick",
    type: "fighting",
    category: "Physical",
    pp: 10,
    power: 100,
    accuracy: 0.95,
    gen: "I"
  },
  {
    movesID: "027",
    name: "Rolling Kick",
    type: "fighting",
    category: "Physical",
    pp: 15,
    power: 60,
    accuracy: 0.85,
    gen: "I"
  },
  {
    movesID: "028",
    name: "Sand Attack",
    type: "ground",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "029",
    name: "Headbutt",
    type: "normal",
    category: "Physical",
    pp: 15,
    power: 70,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "030",
    name: "Horn Attack",
    type: "normal",
    category: "Physical",
    pp: 25,
    power: 65,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "031",
    name: "Fury Attack",
    type: "normal",
    category: "Physical",
    pp: 20,
    power: 15,
    accuracy: 0.85,
    gen: "I"
  },
  {
    movesID: "032",
    name: "Horn Drill",
    type: "normal",
    category: "Physical",
    pp: 5,
    power: "—",
    accuracy: 0.3,
    gen: "I"
  },
  {
    movesID: "033",
    name: "Tackle",
    type: "normal",
    category: "Physical",
    pp: 35,
    power: 40,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "034",
    name: "Body Slam",
    type: "normal",
    category: "Physical",
    pp: 15,
    power: 85,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "035",
    name: "Wrap",
    type: "normal",
    category: "Physical",
    pp: 20,
    power: 15,
    accuracy: 0.9,
    gen: "I"
  },
  {
    movesID: "036",
    name: "Take Down",
    type: "normal",
    category: "Physical",
    pp: 20,
    power: 90,
    accuracy: 0.85,
    gen: "I"
  },
  {
    movesID: "037",
    name: "Thrash",
    type: "normal",
    category: "Physical",
    pp: 10,
    power: 120,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "038",
    name: "Double-Edge",
    type: "normal",
    category: "Physical",
    pp: 15,
    power: 120,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "039",
    name: "Tail Whip",
    type: "normal",
    category: "Status",
    pp: 30,
    power: "—",
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "040",
    name: "Poison Sting",
    type: "poison",
    category: "Physical",
    pp: 35,
    power: 15,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "041",
    name: "Twineedle",
    type: "bug",
    category: "Physical",
    pp: 20,
    power: 25,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "042",
    name: "Pin Missile",
    type: "bug",
    category: "Physical",
    pp: 20,
    power: 25,
    accuracy: 0.95,
    gen: "I"
  },
  {
    movesID: "043",
    name: "Leer",
    type: "normal",
    category: "Status",
    pp: 30,
    power: "—",
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "044",
    name: "Bite",
    type: "dark",
    category: "Physical",
    pp: 25,
    power: 60,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "045",
    name: "Growl",
    type: "normal",
    category: "Status",
    pp: 40,
    power: "—",
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "046",
    name: "Roar",
    type: "normal",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "047",
    name: "Sing",
    type: "normal",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: 0.55,
    gen: "I"
  },
  {
    movesID: "048",
    name: "Supersonic",
    type: "normal",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: 0.55,
    gen: "I"
  },
  {
    movesID: "049",
    name: "Sonic Boom",
    type: "normal",
    category: "Special",
    pp: 20,
    power: "—",
    accuracy: 0.9,
    gen: "I"
  },
  {
    movesID: "050",
    name: "Disable",
    type: "normal",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "051",
    name: "Acid",
    type: "poison",
    category: "Special",
    pp: 30,
    power: 40,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "052",
    name: "Ember",
    type: "fire",
    category: "Special",
    pp: 25,
    power: 40,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "053",
    name: "Flamethrower",
    type: "fire",
    category: "Special",
    pp: 15,
    power: 90,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "054",
    name: "Mist",
    type: "ice",
    category: "Status",
    pp: 30,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "055",
    name: "Water Gun",
    type: "water",
    category: "Special",
    pp: 25,
    power: 40,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "056",
    name: "Hydro Pump",
    type: "water",
    category: "Special",
    pp: 5,
    power: 110,
    accuracy: 0.8,
    gen: "I"
  },
  {
    movesID: "057",
    name: "Surf",
    type: "water",
    category: "Special",
    pp: 15,
    power: 90,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "058",
    name: "Ice Beam",
    type: "ice",
    category: "Special",
    pp: 10,
    power: 90,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "059",
    name: "Blizzard",
    type: "ice",
    category: "Special",
    pp: 5,
    power: 110,
    accuracy: 0.7,
    gen: "I"
  },
  {
    movesID: "060",
    name: "Psybeam",
    type: "psychic",
    category: "Special",
    pp: 20,
    power: 65,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "061",
    name: "Bubble Beam",
    type: "water",
    category: "Special",
    pp: 20,
    power: 65,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "062",
    name: "Aurora Beam",
    type: "ice",
    category: "Special",
    pp: 20,
    power: 65,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "063",
    name: "Hyper Beam",
    type: "normal",
    category: "Special",
    pp: 5,
    power: 150,
    accuracy: 0.9,
    gen: "I"
  },
  {
    movesID: "064",
    name: "Peck",
    type: "flying",
    category: "Physical",
    pp: 35,
    power: 35,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "065",
    name: "Drill Peck",
    type: "flying",
    category: "Physical",
    pp: 20,
    power: 80,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "066",
    name: "Submission",
    type: "fighting",
    category: "Physical",
    pp: 20,
    power: 80,
    accuracy: 0.8,
    gen: "I"
  },
  {
    movesID: "067",
    name: "Low Kick",
    type: "fighting",
    category: "Physical",
    pp: 20,
    power: "—",
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "068",
    name: "Counter",
    type: "fighting",
    category: "Physical",
    pp: 20,
    power: "—",
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "069",
    name: "Seismic Toss",
    type: "fighting",
    category: "Physical",
    pp: 20,
    power: "—",
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "070",
    name: "Strength",
    type: "normal",
    category: "Physical",
    pp: 15,
    power: 80,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "071",
    name: "Absorb",
    type: "grass",
    category: "Special",
    pp: 25,
    power: 20,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "072",
    name: "Mega Drain",
    type: "grass",
    category: "Special",
    pp: 15,
    power: 40,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "073",
    name: "Leech Seed",
    type: "grass",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: 0.9,
    gen: "I"
  },
  {
    movesID: "074",
    name: "Growth",
    type: "normal",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "075",
    name: "Razor Leaf",
    type: "grass",
    category: "Physical",
    pp: 25,
    power: 55,
    accuracy: 0.95,
    gen: "I"
  },
  {
    movesID: "076",
    name: "Solar Beam",
    type: "grass",
    category: "Special",
    pp: 10,
    power: 120,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "077",
    name: "Poison Powder",
    type: "poison",
    category: "Status",
    pp: 35,
    power: "—",
    accuracy: 0.75,
    gen: "I"
  },
  {
    movesID: "078",
    name: "Stun Spore",
    type: "grass",
    category: "Status",
    pp: 30,
    power: "—",
    accuracy: 0.75,
    gen: "I"
  },
  {
    movesID: "079",
    name: "Sleep Powder",
    type: "grass",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: 0.75,
    gen: "I"
  },
  {
    movesID: "080",
    name: "Petal Dance",
    type: "grass",
    category: "Special",
    pp: 10,
    power: 120,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "081",
    name: "String Shot",
    type: "bug",
    category: "Status",
    pp: 40,
    power: "—",
    accuracy: 0.95,
    gen: "I"
  },
  {
    movesID: "082",
    name: "Dragon Rage",
    type: "dragon",
    category: "Special",
    pp: 10,
    power: "—",
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "083",
    name: "Fire Spin",
    type: "fire",
    category: "Special",
    pp: 15,
    power: 35,
    accuracy: 0.85,
    gen: "I"
  },
  {
    movesID: "084",
    name: "Thunder Shock",
    type: "electric",
    category: "Special",
    pp: 30,
    power: 40,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "085",
    name: "Thunderbolt",
    type: "electric",
    category: "Special",
    pp: 15,
    power: 90,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "086",
    name: "Thunder Wave",
    type: "electric",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: 0.9,
    gen: "I"
  },
  {
    movesID: "087",
    name: "Thunder",
    type: "electric",
    category: "Special",
    pp: 10,
    power: 110,
    accuracy: 0.7,
    gen: "I"
  },
  {
    movesID: "088",
    name: "Rock Throw",
    type: "rock",
    category: "Physical",
    pp: 15,
    power: 50,
    accuracy: 0.9,
    gen: "I"
  },
  {
    movesID: "089",
    name: "Earthquake",
    type: "ground",
    category: "Physical",
    pp: 10,
    power: 100,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "090",
    name: "Fissure",
    type: "ground",
    category: "Physical",
    pp: 5,
    power: "—",
    accuracy: 0.3,
    gen: "I"
  },
  {
    movesID: "091",
    name: "Dig",
    type: "ground",
    category: "Physical",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "092",
    name: "Toxic",
    type: "poison",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: 0.9,
    gen: "I"
  },
  {
    movesID: "093",
    name: "Confusion",
    type: "psychic",
    category: "Special",
    pp: 25,
    power: 50,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "094",
    name: "Psychic",
    type: "psychic",
    category: "Special",
    pp: 10,
    power: 90,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "095",
    name: "Hypnosis",
    type: "psychic",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: 0.6,
    gen: "I"
  },
  {
    movesID: "096",
    name: "Meditate",
    type: "psychic",
    category: "Status",
    pp: 40,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "097",
    name: "Agility",
    type: "psychic",
    category: "Status",
    pp: 30,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "098",
    name: "Quick Attack",
    type: "normal",
    category: "Physical",
    pp: 30,
    power: 40,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "099",
    name: "Rage",
    type: "normal",
    category: "Physical",
    pp: 20,
    power: 20,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "100",
    name: "Teleport",
    type: "psychic",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "101",
    name: "Night Shade",
    type: "ghost",
    category: "Special",
    pp: 15,
    power: "—",
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "102",
    name: "Mimic",
    type: "normal",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "103",
    name: "Screech",
    type: "normal",
    category: "Status",
    pp: 40,
    power: "—",
    accuracy: 0.85,
    gen: "I"
  },
  {
    movesID: "104",
    name: "Double Team",
    type: "normal",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "105",
    name: "Recover",
    type: "normal",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "106",
    name: "Harden",
    type: "normal",
    category: "Status",
    pp: 30,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "107",
    name: "Minimize",
    type: "normal",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "108",
    name: "Smokescreen",
    type: "normal",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "109",
    name: "Confuse Ray",
    type: "ghost",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "110",
    name: "Withdraw",
    type: "water",
    category: "Status",
    pp: 40,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "111",
    name: "Defense Curl",
    type: "normal",
    category: "Status",
    pp: 40,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "112",
    name: "Barrier",
    type: "psychic",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "113",
    name: "Light Screen",
    type: "psychic",
    category: "Status",
    pp: 30,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "114",
    name: "Haze",
    type: "ice",
    category: "Status",
    pp: 30,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "115",
    name: "Reflect",
    type: "psychic",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "116",
    name: "Focus Energy",
    type: "normal",
    category: "Status",
    pp: 30,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "117",
    name: "Bide",
    type: "normal",
    category: "Physical",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "118",
    name: "Metronome",
    type: "normal",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "119",
    name: "Mirror Move",
    type: "flying",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "120",
    name: "Self-Destruct",
    type: "normal",
    category: "Physical",
    pp: 5,
    power: 200,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "121",
    name: "Egg Bomb",
    type: "normal",
    category: "Physical",
    pp: 10,
    power: 100,
    accuracy: 0.75,
    gen: "I"
  },
  {
    movesID: "122",
    name: "Lick",
    type: "ghost",
    category: "Physical",
    pp: 30,
    power: 30,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "123",
    name: "Smog",
    type: "poison",
    category: "Special",
    pp: 20,
    power: 30,
    accuracy: 0.7,
    gen: "I"
  },
  {
    movesID: "124",
    name: "Sludge",
    type: "poison",
    category: "Special",
    pp: 20,
    power: 65,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "125",
    name: "Bone Club",
    type: "ground",
    category: "Physical",
    pp: 20,
    power: 65,
    accuracy: 0.85,
    gen: "I"
  },
  {
    movesID: "126",
    name: "Fire Blast",
    type: "fire",
    category: "Special",
    pp: 5,
    power: 110,
    accuracy: 0.85,
    gen: "I"
  },
  {
    movesID: "127",
    name: "Waterfall",
    type: "water",
    category: "Physical",
    pp: 15,
    power: 80,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "128",
    name: "Clamp",
    type: "water",
    category: "Physical",
    pp: 15,
    power: 35,
    accuracy: 0.85,
    gen: "I"
  },
  {
    movesID: "129",
    name: "Swift",
    type: "normal",
    category: "Special",
    pp: 20,
    power: 60,
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "130",
    name: "Skull Bash",
    type: "normal",
    category: "Physical",
    pp: 10,
    power: 130,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "131",
    name: "Spike Cannon",
    type: "normal",
    category: "Physical",
    pp: 15,
    power: 20,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "132",
    name: "Constrict",
    type: "normal",
    category: "Physical",
    pp: 35,
    power: 10,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "133",
    name: "Amnesia",
    type: "psychic",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "134",
    name: "Kinesis",
    type: "psychic",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: 0.8,
    gen: "I"
  },
  {
    movesID: "135",
    name: "Soft-Boiled",
    type: "normal",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "136",
    name: "High Jump Kick",
    type: "fighting",
    category: "Physical",
    pp: 10,
    power: 130,
    accuracy: 0.9,
    gen: "I"
  },
  {
    movesID: "137",
    name: "Glare",
    type: "normal",
    category: "Status",
    pp: 30,
    power: "—",
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "138",
    name: "Dream Eater",
    type: "psychic",
    category: "Special",
    pp: 15,
    power: 100,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "139",
    name: "Poison Gas",
    type: "poison",
    category: "Status",
    pp: 40,
    power: "—",
    accuracy: 0.9,
    gen: "I"
  },
  {
    movesID: "140",
    name: "Barrage",
    type: "normal",
    category: "Physical",
    pp: 20,
    power: 15,
    accuracy: 0.85,
    gen: "I"
  },
  {
    movesID: "141",
    name: "Leech Life",
    type: "bug",
    category: "Physical",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "142",
    name: "Lovely Kiss",
    type: "normal",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: 0.75,
    gen: "I"
  },
  {
    movesID: "143",
    name: "Sky Attack",
    type: "flying",
    category: "Physical",
    pp: 5,
    power: 140,
    accuracy: 0.9,
    gen: "I"
  },
  {
    movesID: "144",
    name: "Transform",
    type: "normal",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "145",
    name: "Bubble",
    type: "water",
    category: "Special",
    pp: 30,
    power: 40,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "146",
    name: "Dizzy Punch",
    type: "normal",
    category: "Physical",
    pp: 10,
    power: 70,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "147",
    name: "Spore",
    type: "grass",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "148",
    name: "Flash",
    type: "normal",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "149",
    name: "Psywave",
    type: "psychic",
    category: "Special",
    pp: 15,
    power: "—",
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "150",
    name: "Splash",
    type: "normal",
    category: "Status",
    pp: 40,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "151",
    name: "Acid Armor",
    type: "poison",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "152",
    name: "Crabhammer",
    type: "water",
    category: "Physical",
    pp: 10,
    power: 100,
    accuracy: 0.9,
    gen: "I"
  },
  {
    movesID: "153",
    name: "Explosion",
    type: "normal",
    category: "Physical",
    pp: 5,
    power: 250,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "154",
    name: "Fury Swipes",
    type: "normal",
    category: "Physical",
    pp: 15,
    power: 18,
    accuracy: 0.8,
    gen: "I"
  },
  {
    movesID: "155",
    name: "Bonemerang",
    type: "ground",
    category: "Physical",
    pp: 10,
    power: 50,
    accuracy: 0.9,
    gen: "I"
  },
  {
    movesID: "156",
    name: "Rest",
    type: "psychic",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "157",
    name: "Rock Slide",
    type: "rock",
    category: "Physical",
    pp: 10,
    power: 75,
    accuracy: 0.9,
    gen: "I"
  },
  {
    movesID: "158",
    name: "Hyper Fang",
    type: "normal",
    category: "Physical",
    pp: 15,
    power: 80,
    accuracy: 0.9,
    gen: "I"
  },
  {
    movesID: "159",
    name: "Sharpen",
    type: "normal",
    category: "Status",
    pp: 30,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "160",
    name: "Conversion",
    type: "normal",
    category: "Status",
    pp: 30,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "161",
    name: "Tri Attack",
    type: "normal",
    category: "Special",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "162",
    name: "Super Fang",
    type: "normal",
    category: "Physical",
    pp: 10,
    power: "—",
    accuracy: 0.9,
    gen: "I"
  },
  {
    movesID: "163",
    name: "Slash",
    type: "normal",
    category: "Physical",
    pp: 20,
    power: 70,
    accuracy: 1,
    gen: "I"
  },
  {
    movesID: "164",
    name: "Substitute",
    type: "normal",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "165",
    name: "Struggle",
    type: "normal",
    category: "Physical",
    pp: 1,
    power: 50,
    accuracy: "—",
    gen: "I"
  },
  {
    movesID: "166",
    name: "Sketch",
    type: "normal",
    category: "Status",
    pp: 1,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "167",
    name: "Triple Kick",
    type: "fighting",
    category: "Physical",
    pp: 10,
    power: 10,
    accuracy: 0.9,
    gen: "II"
  },
  {
    movesID: "168",
    name: "Thief",
    type: "dark",
    category: "Physical",
    pp: 25,
    power: 60,
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "169",
    name: "Spider Web",
    type: "bug",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "170",
    name: "Mind Reader",
    type: "normal",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "171",
    name: "Nightmare",
    type: "ghost",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "172",
    name: "Flame Wheel",
    type: "fire",
    category: "Physical",
    pp: 25,
    power: 60,
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "173",
    name: "Snore",
    type: "normal",
    category: "Special",
    pp: 15,
    power: 50,
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "174",
    name: "Curse",
    type: "ghost",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "175",
    name: "Flail",
    type: "normal",
    category: "Physical",
    pp: 15,
    power: "—",
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "176",
    name: "Conversion 2",
    type: "normal",
    category: "Status",
    pp: 30,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "177",
    name: "Aeroblast",
    type: "flying",
    category: "Special",
    pp: 5,
    power: 100,
    accuracy: 0.95,
    gen: "II"
  },
  {
    movesID: "178",
    name: "Cotton Spore",
    type: "grass",
    category: "Status",
    pp: 40,
    power: "—",
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "179",
    name: "Reversal",
    type: "fighting",
    category: "Physical",
    pp: 15,
    power: "—",
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "180",
    name: "Spite",
    type: "ghost",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "181",
    name: "Powder Snow",
    type: "ice",
    category: "Special",
    pp: 25,
    power: 40,
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "182",
    name: "Protect",
    type: "normal",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "183",
    name: "Mach Punch",
    type: "fighting",
    category: "Physical",
    pp: 30,
    power: 40,
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "184",
    name: "Scary Face",
    type: "normal",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "185",
    name: "Feint Attack",
    type: "dark",
    category: "Physical",
    pp: 20,
    power: 60,
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "186",
    name: "Sweet Kiss",
    type: "fairy",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: 0.75,
    gen: "II"
  },
  {
    movesID: "187",
    name: "Belly Drum",
    type: "normal",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "188",
    name: "Sludge Bomb",
    type: "poison",
    category: "Special",
    pp: 10,
    power: 90,
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "189",
    name: "Mud-Slap",
    type: "ground",
    category: "Special",
    pp: 10,
    power: 20,
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "190",
    name: "Octazooka",
    type: "water",
    category: "Special",
    pp: 10,
    power: 65,
    accuracy: 0.85,
    gen: "II"
  },
  {
    movesID: "191",
    name: "Spikes",
    type: "ground",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "192",
    name: "Zap Cannon",
    type: "electric",
    category: "Special",
    pp: 5,
    power: 120,
    accuracy: 0.5,
    gen: "II"
  },
  {
    movesID: "193",
    name: "Foresight",
    type: "normal",
    category: "Status",
    pp: 40,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "194",
    name: "Destiny Bond",
    type: "ghost",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "195",
    name: "Perish Song",
    type: "normal",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "196",
    name: "Icy Wind",
    type: "ice",
    category: "Special",
    pp: 15,
    power: 55,
    accuracy: 0.95,
    gen: "II"
  },
  {
    movesID: "197",
    name: "Detect",
    type: "fighting",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "198",
    name: "Bone Rush",
    type: "ground",
    category: "Physical",
    pp: 10,
    power: 25,
    accuracy: 0.9,
    gen: "II"
  },
  {
    movesID: "199",
    name: "Lock-On",
    type: "normal",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "200",
    name: "Outrage",
    type: "dragon",
    category: "Physical",
    pp: 10,
    power: 120,
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "201",
    name: "Sandstorm",
    type: "rock",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "202",
    name: "Giga Drain",
    type: "grass",
    category: "Special",
    pp: 10,
    power: 75,
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "203",
    name: "Endure",
    type: "normal",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "204",
    name: "Charm",
    type: "fairy",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "205",
    name: "Rollout",
    type: "rock",
    category: "Physical",
    pp: 20,
    power: 30,
    accuracy: 0.9,
    gen: "II"
  },
  {
    movesID: "206",
    name: "False Swipe",
    type: "normal",
    category: "Physical",
    pp: 40,
    power: 40,
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "207",
    name: "Swagger",
    type: "normal",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: 0.85,
    gen: "II"
  },
  {
    movesID: "208",
    name: "Milk Drink",
    type: "normal",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "209",
    name: "Spark",
    type: "electric",
    category: "Physical",
    pp: 20,
    power: 65,
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "210",
    name: "Fury Cutter",
    type: "bug",
    category: "Physical",
    pp: 20,
    power: 40,
    accuracy: 0.95,
    gen: "II"
  },
  {
    movesID: "211",
    name: "Steel Wing",
    type: "steel",
    category: "Physical",
    pp: 25,
    power: 70,
    accuracy: 0.9,
    gen: "II"
  },
  {
    movesID: "212",
    name: "Mean Look",
    type: "normal",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "213",
    name: "Attract",
    type: "normal",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "214",
    name: "Sleep Talk",
    type: "normal",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "215",
    name: "Heal Bell",
    type: "normal",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "216",
    name: "Return",
    type: "normal",
    category: "Physical",
    pp: 20,
    power: "—",
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "217",
    name: "Present",
    type: "normal",
    category: "Physical",
    pp: 15,
    power: "—",
    accuracy: 0.9,
    gen: "II"
  },
  {
    movesID: "218",
    name: "Frustration",
    type: "normal",
    category: "Physical",
    pp: 20,
    power: "—",
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "219",
    name: "Safeguard",
    type: "normal",
    category: "Status",
    pp: 25,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "220",
    name: "Pain Split",
    type: "normal",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "221",
    name: "Sacred Fire",
    type: "fire",
    category: "Physical",
    pp: 5,
    power: 100,
    accuracy: 0.95,
    gen: "II"
  },
  {
    movesID: "222",
    name: "Magnitude",
    type: "ground",
    category: "Physical",
    pp: 30,
    power: "—",
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "223",
    name: "Dynamic Punch",
    type: "fighting",
    category: "Physical",
    pp: 5,
    power: 100,
    accuracy: 0.5,
    gen: "II"
  },
  {
    movesID: "224",
    name: "Megahorn",
    type: "bug",
    category: "Physical",
    pp: 10,
    power: 120,
    accuracy: 0.85,
    gen: "II"
  },
  {
    movesID: "225",
    name: "Dragon Breath",
    type: "dragon",
    category: "Special",
    pp: 20,
    power: 60,
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "226",
    name: "Baton Pass",
    type: "normal",
    category: "Status",
    pp: 40,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "227",
    name: "Encore",
    type: "normal",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "228",
    name: "Pursuit",
    type: "dark",
    category: "Physical",
    pp: 20,
    power: 40,
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "229",
    name: "Rapid Spin",
    type: "normal",
    category: "Physical",
    pp: 40,
    power: 50,
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "230",
    name: "Sweet Scent",
    type: "normal",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "231",
    name: "Iron Tail",
    type: "steel",
    category: "Physical",
    pp: 15,
    power: 100,
    accuracy: 0.75,
    gen: "II"
  },
  {
    movesID: "232",
    name: "Metal Claw",
    type: "steel",
    category: "Physical",
    pp: 35,
    power: 50,
    accuracy: 0.95,
    gen: "II"
  },
  {
    movesID: "233",
    name: "Vital Throw",
    type: "fighting",
    category: "Physical",
    pp: 10,
    power: 70,
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "234",
    name: "Morning Sun",
    type: "normal",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "235",
    name: "Synthesis",
    type: "grass",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "236",
    name: "Moonlight",
    type: "fairy",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "237",
    name: "Hidden Power",
    type: "normal",
    category: "Special",
    pp: 15,
    power: 60,
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "238",
    name: "Cross Chop",
    type: "fighting",
    category: "Physical",
    pp: 5,
    power: 100,
    accuracy: 0.8,
    gen: "II"
  },
  {
    movesID: "239",
    name: "Twister",
    type: "dragon",
    category: "Special",
    pp: 20,
    power: 40,
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "240",
    name: "Rain Dance",
    type: "water",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "241",
    name: "Sunny Day",
    type: "fire",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "242",
    name: "Crunch",
    type: "dark",
    category: "Physical",
    pp: 15,
    power: 80,
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "243",
    name: "Mirror Coat",
    type: "psychic",
    category: "Special",
    pp: 20,
    power: "—",
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "244",
    name: "Psych Up",
    type: "normal",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "II"
  },
  {
    movesID: "245",
    name: "Extreme Speed",
    type: "normal",
    category: "Physical",
    pp: 5,
    power: 80,
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "246",
    name: "Ancient Power",
    type: "rock",
    category: "Special",
    pp: 5,
    power: 60,
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "247",
    name: "Shadow Ball",
    type: "ghost",
    category: "Special",
    pp: 15,
    power: 80,
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "248",
    name: "Future Sight",
    type: "psychic",
    category: "Special",
    pp: 10,
    power: 120,
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "249",
    name: "Rock Smash",
    type: "fighting",
    category: "Physical",
    pp: 15,
    power: 40,
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "250",
    name: "Whirlpool",
    type: "water",
    category: "Special",
    pp: 15,
    power: 35,
    accuracy: 0.85,
    gen: "II"
  },
  {
    movesID: "251",
    name: "Beat Up",
    type: "dark",
    category: "Physical",
    pp: 10,
    power: "—",
    accuracy: 1,
    gen: "II"
  },
  {
    movesID: "252",
    name: "Fake Out",
    type: "normal",
    category: "Physical",
    pp: 10,
    power: 40,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "253",
    name: "Uproar",
    type: "normal",
    category: "Special",
    pp: 10,
    power: 90,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "254",
    name: "Stockpile",
    type: "normal",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "255",
    name: "Spit Up",
    type: "normal",
    category: "Special",
    pp: 10,
    power: "—",
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "256",
    name: "Swallow",
    type: "normal",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "257",
    name: "Heat Wave",
    type: "fire",
    category: "Special",
    pp: 10,
    power: 95,
    accuracy: 0.9,
    gen: "III"
  },
  {
    movesID: "258",
    name: "Hail",
    type: "ice",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "259",
    name: "Torment",
    type: "dark",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "260",
    name: "Flatter",
    type: "dark",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "261",
    name: "Will-O-Wisp",
    type: "fire",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: 0.85,
    gen: "III"
  },
  {
    movesID: "262",
    name: "Memento",
    type: "dark",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "263",
    name: "Facade",
    type: "normal",
    category: "Physical",
    pp: 20,
    power: 70,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "264",
    name: "Focus Punch",
    type: "fighting",
    category: "Physical",
    pp: 20,
    power: 150,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "265",
    name: "Smelling Salts",
    type: "normal",
    category: "Physical",
    pp: 10,
    power: 70,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "266",
    name: "Follow Me",
    type: "normal",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "267",
    name: "Nature Power",
    type: "normal",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "268",
    name: "Charge",
    type: "electric",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "269",
    name: "Taunt",
    type: "dark",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "270",
    name: "Helping Hand",
    type: "normal",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "271",
    name: "Trick",
    type: "psychic",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "272",
    name: "Role Play",
    type: "psychic",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "273",
    name: "Wish",
    type: "normal",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "274",
    name: "Assist",
    type: "normal",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "275",
    name: "Ingrain",
    type: "grass",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "276",
    name: "Superpower",
    type: "fighting",
    category: "Physical",
    pp: 5,
    power: 120,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "277",
    name: "Magic Coat",
    type: "psychic",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "278",
    name: "Recycle",
    type: "normal",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "279",
    name: "Revenge",
    type: "fighting",
    category: "Physical",
    pp: 10,
    power: 60,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "280",
    name: "Brick Break",
    type: "fighting",
    category: "Physical",
    pp: 15,
    power: 75,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "281",
    name: "Yawn",
    type: "normal",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "282",
    name: "Knock Off",
    type: "dark",
    category: "Physical",
    pp: 20,
    power: 65,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "283",
    name: "Endeavor",
    type: "normal",
    category: "Physical",
    pp: 5,
    power: "—",
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "284",
    name: "Eruption",
    type: "fire",
    category: "Special",
    pp: 5,
    power: 150,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "285",
    name: "Skill Swap",
    type: "psychic",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "286",
    name: "Imprison",
    type: "psychic",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "287",
    name: "Refresh",
    type: "normal",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "288",
    name: "Grudge",
    type: "ghost",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "289",
    name: "Snatch",
    type: "dark",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "290",
    name: "Secret Power",
    type: "normal",
    category: "Physical",
    pp: 20,
    power: 70,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "291",
    name: "Dive",
    type: "water",
    category: "Physical",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "292",
    name: "Arm Thrust",
    type: "fighting",
    category: "Physical",
    pp: 20,
    power: 15,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "293",
    name: "Camouflage",
    type: "normal",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "294",
    name: "Tail Glow",
    type: "bug",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "295",
    name: "Luster Purge",
    type: "psychic",
    category: "Special",
    pp: 5,
    power: 70,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "296",
    name: "Mist Ball",
    type: "psychic",
    category: "Special",
    pp: 5,
    power: 70,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "297",
    name: "Feather Dance",
    type: "flying",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "298",
    name: "Teeter Dance",
    type: "normal",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "299",
    name: "Blaze Kick",
    type: "fire",
    category: "Physical",
    pp: 10,
    power: 85,
    accuracy: 0.9,
    gen: "III"
  },
  {
    movesID: "300",
    name: "Mud Sport",
    type: "ground",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "301",
    name: "Ice Ball",
    type: "ice",
    category: "Physical",
    pp: 20,
    power: 30,
    accuracy: 0.9,
    gen: "III"
  },
  {
    movesID: "302",
    name: "Needle Arm",
    type: "grass",
    category: "Physical",
    pp: 15,
    power: 60,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "303",
    name: "Slack Off",
    type: "normal",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "304",
    name: "Hyper Voice",
    type: "normal",
    category: "Special",
    pp: 10,
    power: 90,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "305",
    name: "Poison Fang",
    type: "poison",
    category: "Physical",
    pp: 15,
    power: 50,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "306",
    name: "Crush Claw",
    type: "normal",
    category: "Physical",
    pp: 10,
    power: 75,
    accuracy: 0.95,
    gen: "III"
  },
  {
    movesID: "307",
    name: "Blast Burn",
    type: "fire",
    category: "Special",
    pp: 5,
    power: 150,
    accuracy: 0.9,
    gen: "III"
  },
  {
    movesID: "308",
    name: "Hydro Cannon",
    type: "water",
    category: "Special",
    pp: 5,
    power: 150,
    accuracy: 0.9,
    gen: "III"
  },
  {
    movesID: "309",
    name: "Meteor Mash",
    type: "steel",
    category: "Physical",
    pp: 10,
    power: 90,
    accuracy: 0.9,
    gen: "III"
  },
  {
    movesID: "310",
    name: "Astonish",
    type: "ghost",
    category: "Physical",
    pp: 15,
    power: 30,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "311",
    name: "Weather Ball",
    type: "normal",
    category: "Special",
    pp: 10,
    power: 50,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "312",
    name: "Aromatherapy",
    type: "grass",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "313",
    name: "Fake Tears",
    type: "dark",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "314",
    name: "Air Cutter",
    type: "flying",
    category: "Special",
    pp: 25,
    power: 60,
    accuracy: 0.95,
    gen: "III"
  },
  {
    movesID: "315",
    name: "Overheat",
    type: "fire",
    category: "Special",
    pp: 5,
    power: 130,
    accuracy: 0.9,
    gen: "III"
  },
  {
    movesID: "316",
    name: "Odor Sleuth",
    type: "normal",
    category: "Status",
    pp: 40,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "317",
    name: "Rock Tomb",
    type: "rock",
    category: "Physical",
    pp: 15,
    power: 60,
    accuracy: 0.95,
    gen: "III"
  },
  {
    movesID: "318",
    name: "Silver Wind",
    type: "bug",
    category: "Special",
    pp: 5,
    power: 60,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "319",
    name: "Metal Sound",
    type: "steel",
    category: "Status",
    pp: 40,
    power: "—",
    accuracy: 0.85,
    gen: "III"
  },
  {
    movesID: "320",
    name: "Grass Whistle",
    type: "grass",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: 0.55,
    gen: "III"
  },
  {
    movesID: "321",
    name: "Tickle",
    type: "normal",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "322",
    name: "Cosmic Power",
    type: "psychic",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "323",
    name: "Water Spout",
    type: "water",
    category: "Special",
    pp: 5,
    power: 150,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "324",
    name: "Signal Beam",
    type: "bug",
    category: "Special",
    pp: 15,
    power: 75,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "325",
    name: "Shadow Punch",
    type: "ghost",
    category: "Physical",
    pp: 20,
    power: 60,
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "326",
    name: "Extrasensory",
    type: "psychic",
    category: "Special",
    pp: 20,
    power: 80,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "327",
    name: "Sky Uppercut",
    type: "fighting",
    category: "Physical",
    pp: 15,
    power: 85,
    accuracy: 0.9,
    gen: "III"
  },
  {
    movesID: "328",
    name: "Sand Tomb",
    type: "ground",
    category: "Physical",
    pp: 15,
    power: 35,
    accuracy: 0.85,
    gen: "III"
  },
  {
    movesID: "329",
    name: "Sheer Cold",
    type: "ice",
    category: "Special",
    pp: 5,
    power: "—",
    accuracy: 0.3,
    gen: "III"
  },
  {
    movesID: "330",
    name: "Muddy Water",
    type: "water",
    category: "Special",
    pp: 10,
    power: 90,
    accuracy: 0.85,
    gen: "III"
  },
  {
    movesID: "331",
    name: "Bullet Seed",
    type: "grass",
    category: "Physical",
    pp: 30,
    power: 25,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "332",
    name: "Aerial Ace",
    type: "flying",
    category: "Physical",
    pp: 20,
    power: 60,
    accuracy: "-",
    gen: "III"
  },
  {
    movesID: "333",
    name: "Icicle Spear",
    type: "ice",
    category: "Physical",
    pp: 30,
    power: 25,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "334",
    name: "Iron Defense",
    type: "steel",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "335",
    name: "Block",
    type: "normal",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "336",
    name: "Howl",
    type: "normal",
    category: "Status",
    pp: 40,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "337",
    name: "Dragon Claw",
    type: "dragon",
    category: "Physical",
    pp: 15,
    power: 80,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "338",
    name: "Frenzy Plant",
    type: "grass",
    category: "Special",
    pp: 5,
    power: 150,
    accuracy: 0.9,
    gen: "III"
  },
  {
    movesID: "339",
    name: "Bulk Up",
    type: "fighting",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "340",
    name: "Bounce",
    type: "flying",
    category: "Physical",
    pp: 5,
    power: 85,
    accuracy: 0.85,
    gen: "III"
  },
  {
    movesID: "341",
    name: "Mud Shot",
    type: "ground",
    category: "Special",
    pp: 15,
    power: 55,
    accuracy: 0.95,
    gen: "III"
  },
  {
    movesID: "342",
    name: "Poison Tail",
    type: "poison",
    category: "Physical",
    pp: 25,
    power: 50,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "343",
    name: "Covet",
    type: "normal",
    category: "Physical",
    pp: 25,
    power: 60,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "344",
    name: "Volt Tackle",
    type: "electric",
    category: "Physical",
    pp: 15,
    power: 120,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "345",
    name: "Magical Leaf",
    type: "grass",
    category: "Special",
    pp: 20,
    power: 60,
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "346",
    name: "Water Sport",
    type: "water",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "347",
    name: "Calm Mind",
    type: "psychic",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "348",
    name: "Leaf Blade",
    type: "grass",
    category: "Physical",
    pp: 15,
    power: 90,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "349",
    name: "Dragon Dance",
    type: "dragon",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "350",
    name: "Rock Blast",
    type: "rock",
    category: "Physical",
    pp: 10,
    power: 25,
    accuracy: 0.9,
    gen: "III"
  },
  {
    movesID: "351",
    name: "Shock Wave",
    type: "electric",
    category: "Special",
    pp: 20,
    power: 60,
    accuracy: "—",
    gen: "III"
  },
  {
    movesID: "352",
    name: "Water Pulse",
    type: "water",
    category: "Special",
    pp: 20,
    power: 60,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "353",
    name: "Doom Desire",
    type: "steel",
    category: "Special",
    pp: 5,
    power: 140,
    accuracy: 1,
    gen: "III"
  },
  {
    movesID: "354",
    name: "Psycho Boost",
    type: "psychic",
    category: "Special",
    pp: 5,
    power: 140,
    accuracy: 0.9,
    gen: "III"
  },
  {
    movesID: "355",
    name: "Roost",
    type: "flying",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "356",
    name: "Gravity",
    type: "psychic",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "357",
    name: "Miracle Eye",
    type: "psychic",
    category: "Status",
    pp: 40,
    power: "—",
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "358",
    name: "Wake-Up Slap",
    type: "fighting",
    category: "Physical",
    pp: 10,
    power: 70,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "359",
    name: "Hammer Arm",
    type: "fighting",
    category: "Physical",
    pp: 10,
    power: 100,
    accuracy: 0.9,
    gen: "IV"
  },
  {
    movesID: "360",
    name: "Gyro Ball",
    type: "steel",
    category: "Physical",
    pp: 5,
    power: "—",
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "361",
    name: "Healing Wish",
    type: "psychic",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "362",
    name: "Brine",
    type: "water",
    category: "Special",
    pp: 10,
    power: 65,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "363",
    name: "Natural Gift",
    type: "normal",
    category: "Physical",
    pp: 15,
    power: "—",
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "364",
    name: "Feint",
    type: "normal",
    category: "Physical",
    pp: 10,
    power: 30,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "365",
    name: "Pluck",
    type: "flying",
    category: "Physical",
    pp: 20,
    power: 60,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "366",
    name: "Tailwind",
    type: "flying",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "367",
    name: "Acupressure",
    type: "normal",
    category: "Status",
    pp: 30,
    power: "—",
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "368",
    name: "Metal Burst",
    type: "steel",
    category: "Physical",
    pp: 10,
    power: "—",
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "369",
    name: "U-turn",
    type: "bug",
    category: "Physical",
    pp: 20,
    power: 70,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "370",
    name: "Close Combat",
    type: "fighting",
    category: "Physical",
    pp: 5,
    power: 120,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "371",
    name: "Payback",
    type: "dark",
    category: "Physical",
    pp: 10,
    power: 50,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "372",
    name: "Assurance",
    type: "dark",
    category: "Physical",
    pp: 10,
    power: 60,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "373",
    name: "Embargo",
    type: "dark",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "374",
    name: "Fling",
    type: "dark",
    category: "Physical",
    pp: 10,
    power: "—",
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "375",
    name: "Psycho Shift",
    type: "psychic",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "376",
    name: "Trump Card",
    type: "normal",
    category: "Special",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "377",
    name: "Heal Block",
    type: "psychic",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "378",
    name: "Wring Out",
    type: "normal",
    category: "Special",
    pp: 5,
    power: "—",
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "379",
    name: "Power Trick",
    type: "psychic",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "380",
    name: "Gastro Acid",
    type: "poison",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "381",
    name: "Lucky Chant",
    type: "normal",
    category: "Status",
    pp: 30,
    power: "—",
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "382",
    name: "Me First",
    type: "normal",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "383",
    name: "Copycat",
    type: "normal",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "384",
    name: "Power Swap",
    type: "psychic",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "385",
    name: "Guard Swap",
    type: "psychic",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "386",
    name: "Punishment",
    type: "dark",
    category: "Physical",
    pp: 5,
    power: "—",
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "387",
    name: "Last Resort",
    type: "normal",
    category: "Physical",
    pp: 5,
    power: 140,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "388",
    name: "Worry Seed",
    type: "grass",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "389",
    name: "Sucker Punch",
    type: "dark",
    category: "Physical",
    pp: 5,
    power: 70,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "390",
    name: "Toxic Spikes",
    type: "poison",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "391",
    name: "Heart Swap",
    type: "psychic",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "392",
    name: "Aqua Ring",
    type: "water",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "393",
    name: "Magnet Rise",
    type: "electric",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "394",
    name: "Flare Blitz",
    type: "fire",
    category: "Physical",
    pp: 15,
    power: 120,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "395",
    name: "Force Palm",
    type: "fighting",
    category: "Physical",
    pp: 10,
    power: 60,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "396",
    name: "Aura Sphere",
    type: "fighting",
    category: "Special",
    pp: 20,
    power: 80,
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "397",
    name: "Rock Polish",
    type: "rock",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "398",
    name: "Poison Jab",
    type: "poison",
    category: "Physical",
    pp: 20,
    power: 80,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "399",
    name: "Dark Pulse",
    type: "dark",
    category: "Special",
    pp: 15,
    power: 80,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "400",
    name: "Night Slash",
    type: "dark",
    category: "Physical",
    pp: 15,
    power: 70,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "401",
    name: "Aqua Tail",
    type: "water",
    category: "Physical",
    pp: 10,
    power: 90,
    accuracy: 0.9,
    gen: "IV"
  },
  {
    movesID: "402",
    name: "Seed Bomb",
    type: "grass",
    category: "Physical",
    pp: 15,
    power: 80,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "403",
    name: "Air Slash",
    type: "flying",
    category: "Special",
    pp: 15,
    power: 75,
    accuracy: 0.95,
    gen: "IV"
  },
  {
    movesID: "404",
    name: "X-Scissor",
    type: "bug",
    category: "Physical",
    pp: 15,
    power: 80,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "405",
    name: "Bug Buzz",
    type: "bug",
    category: "Special",
    pp: 10,
    power: 90,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "406",
    name: "Dragon Pulse",
    type: "dragon",
    category: "Special",
    pp: 10,
    power: 85,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "407",
    name: "Dragon Rush",
    type: "dragon",
    category: "Physical",
    pp: 10,
    power: 100,
    accuracy: 0.75,
    gen: "IV"
  },
  {
    movesID: "408",
    name: "Power Gem",
    type: "rock",
    category: "Special",
    pp: 20,
    power: 80,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "409",
    name: "Drain Punch",
    type: "fighting",
    category: "Physical",
    pp: 10,
    power: 75,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "410",
    name: "Vacuum Wave",
    type: "fighting",
    category: "Special",
    pp: 30,
    power: 40,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "411",
    name: "Focus Blast",
    type: "fighting",
    category: "Special",
    pp: 5,
    power: 120,
    accuracy: 0.7,
    gen: "IV"
  },
  {
    movesID: "412",
    name: "Energy Ball",
    type: "grass",
    category: "Special",
    pp: 10,
    power: 90,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "413",
    name: "Brave Bird",
    type: "flying",
    category: "Physical",
    pp: 15,
    power: 120,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "414",
    name: "Earth Power",
    type: "ground",
    category: "Special",
    pp: 10,
    power: 90,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "415",
    name: "Switcheroo",
    type: "dark",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "416",
    name: "Giga Impact",
    type: "normal",
    category: "Physical",
    pp: 5,
    power: 150,
    accuracy: 0.9,
    gen: "IV"
  },
  {
    movesID: "417",
    name: "Nasty Plot",
    type: "dark",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "418",
    name: "Bullet Punch",
    type: "steel",
    category: "Physical",
    pp: 30,
    power: 40,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "419",
    name: "Avalanche",
    type: "ice",
    category: "Physical",
    pp: 10,
    power: 60,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "420",
    name: "Ice Shard",
    type: "ice",
    category: "Physical",
    pp: 30,
    power: 40,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "421",
    name: "Shadow Claw",
    type: "ghost",
    category: "Physical",
    pp: 15,
    power: 70,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "422",
    name: "Thunder Fang",
    type: "electric",
    category: "Physical",
    pp: 15,
    power: 65,
    accuracy: 0.95,
    gen: "IV"
  },
  {
    movesID: "423",
    name: "Ice Fang",
    type: "ice",
    category: "Physical",
    pp: 15,
    power: 65,
    accuracy: 0.95,
    gen: "IV"
  },
  {
    movesID: "424",
    name: "Fire Fang",
    type: "fire",
    category: "Physical",
    pp: 15,
    power: 65,
    accuracy: 0.95,
    gen: "IV"
  },
  {
    movesID: "425",
    name: "Shadow Sneak",
    type: "ghost",
    category: "Physical",
    pp: 30,
    power: 40,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "426",
    name: "Mud Bomb",
    type: "ground",
    category: "Special",
    pp: 10,
    power: 65,
    accuracy: 0.85,
    gen: "IV"
  },
  {
    movesID: "427",
    name: "Psycho Cut",
    type: "psychic",
    category: "Physical",
    pp: 20,
    power: 70,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "428",
    name: "Zen Headbutt",
    type: "psychic",
    category: "Physical",
    pp: 15,
    power: 80,
    accuracy: 0.9,
    gen: "IV"
  },
  {
    movesID: "429",
    name: "Mirror Shot",
    type: "steel",
    category: "Special",
    pp: 10,
    power: 65,
    accuracy: 0.85,
    gen: "IV"
  },
  {
    movesID: "430",
    name: "Flash Cannon",
    type: "steel",
    category: "Special",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "431",
    name: "Rock Climb",
    type: "normal",
    category: "Physical",
    pp: 20,
    power: 90,
    accuracy: 0.85,
    gen: "IV"
  },
  {
    movesID: "432",
    name: "Defog",
    type: "flying",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "433",
    name: "Trick Room",
    type: "psychic",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "434",
    name: "Draco Meteor",
    type: "dragon",
    category: "Special",
    pp: 5,
    power: 130,
    accuracy: 0.9,
    gen: "IV"
  },
  {
    movesID: "435",
    name: "Discharge",
    type: "electric",
    category: "Special",
    pp: 15,
    power: 80,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "436",
    name: "Lava Plume",
    type: "fire",
    category: "Special",
    pp: 15,
    power: 80,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "437",
    name: "Leaf Storm",
    type: "grass",
    category: "Special",
    pp: 5,
    power: 130,
    accuracy: 0.9,
    gen: "IV"
  },
  {
    movesID: "438",
    name: "Power Whip",
    type: "grass",
    category: "Physical",
    pp: 10,
    power: 120,
    accuracy: 0.85,
    gen: "IV"
  },
  {
    movesID: "439",
    name: "Rock Wrecker",
    type: "rock",
    category: "Physical",
    pp: 5,
    power: 150,
    accuracy: 0.9,
    gen: "IV"
  },
  {
    movesID: "440",
    name: "Cross Poison",
    type: "poison",
    category: "Physical",
    pp: 20,
    power: 70,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "441",
    name: "Gunk Shot",
    type: "poison",
    category: "Physical",
    pp: 5,
    power: 120,
    accuracy: 0.8,
    gen: "IV"
  },
  {
    movesID: "442",
    name: "Iron Head",
    type: "steel",
    category: "Physical",
    pp: 15,
    power: 80,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "443",
    name: "Magnet Bomb",
    type: "steel",
    category: "Physical",
    pp: 20,
    power: 60,
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "444",
    name: "Stone Edge",
    type: "rock",
    category: "Physical",
    pp: 5,
    power: 100,
    accuracy: 0.8,
    gen: "IV"
  },
  {
    movesID: "445",
    name: "Captivate",
    type: "normal",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "446",
    name: "Stealth Rock",
    type: "rock",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "447",
    name: "Grass Knot",
    type: "grass",
    category: "Special",
    pp: 20,
    power: "—",
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "448",
    name: "Chatter",
    type: "flying",
    category: "Special",
    pp: 20,
    power: 65,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "449",
    name: "Judgment",
    type: "normal",
    category: "Special",
    pp: 10,
    power: 100,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "450",
    name: "Bug Bite",
    type: "bug",
    category: "Physical",
    pp: 20,
    power: 60,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "451",
    name: "Charge Beam",
    type: "electric",
    category: "Special",
    pp: 10,
    power: 50,
    accuracy: 0.9,
    gen: "IV"
  },
  {
    movesID: "452",
    name: "Wood Hammer",
    type: "grass",
    category: "Physical",
    pp: 15,
    power: 120,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "453",
    name: "Aqua Jet",
    type: "water",
    category: "Physical",
    pp: 20,
    power: 40,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "454",
    name: "Attack Order",
    type: "bug",
    category: "Physical",
    pp: 15,
    power: 90,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "455",
    name: "Defend Order",
    type: "bug",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "456",
    name: "Heal Order",
    type: "bug",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "457",
    name: "Head Smash",
    type: "rock",
    category: "Physical",
    pp: 5,
    power: 150,
    accuracy: 0.8,
    gen: "IV"
  },
  {
    movesID: "458",
    name: "Double Hit",
    type: "normal",
    category: "Physical",
    pp: 10,
    power: 35,
    accuracy: 0.9,
    gen: "IV"
  },
  {
    movesID: "459",
    name: "Roar of Time",
    type: "dragon",
    category: "Special",
    pp: 5,
    power: 150,
    accuracy: 0.9,
    gen: "IV"
  },
  {
    movesID: "460",
    name: "Spacial Rend",
    type: "dragon",
    category: "Special",
    pp: 5,
    power: 100,
    accuracy: 0.95,
    gen: "IV"
  },
  {
    movesID: "461",
    name: "Lunar Dance",
    type: "psychic",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "IV"
  },
  {
    movesID: "462",
    name: "Crush Grip",
    type: "normal",
    category: "Physical",
    pp: 5,
    power: "—",
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "463",
    name: "Magma Storm",
    type: "fire",
    category: "Special",
    pp: 5,
    power: 100,
    accuracy: 0.75,
    gen: "IV"
  },
  {
    movesID: "464",
    name: "Dark Void",
    type: "dark",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: 0.5,
    gen: "IV"
  },
  {
    movesID: "465",
    name: "Seed Flare",
    type: "grass",
    category: "Special",
    pp: 5,
    power: 120,
    accuracy: 0.85,
    gen: "IV"
  },
  {
    movesID: "466",
    name: "Ominous Wind",
    type: "ghost",
    category: "Special",
    pp: 5,
    power: 60,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "467",
    name: "Shadow Force",
    type: "ghost",
    category: "Physical",
    pp: 5,
    power: 120,
    accuracy: 1,
    gen: "IV"
  },
  {
    movesID: "468",
    name: "Hone Claws",
    type: "dark",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: "—",
    gen: "V"
  },
  {
    movesID: "469",
    name: "Wide Guard",
    type: "rock",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "V"
  },
  {
    movesID: "470",
    name: "Guard Split",
    type: "psychic",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "V"
  },
  {
    movesID: "471",
    name: "Power Split",
    type: "psychic",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "V"
  },
  {
    movesID: "472",
    name: "Wonder Room",
    type: "psychic",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "V"
  },
  {
    movesID: "473",
    name: "Psyshock",
    type: "psychic",
    category: "Special",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "474",
    name: "Venoshock",
    type: "poison",
    category: "Special",
    pp: 10,
    power: 65,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "475",
    name: "Autotomize",
    type: "steel",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: "—",
    gen: "V"
  },
  {
    movesID: "476",
    name: "Rage Powder",
    type: "bug",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "V"
  },
  {
    movesID: "477",
    name: "Telekinesis",
    type: "psychic",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: "—",
    gen: "V"
  },
  {
    movesID: "478",
    name: "Magic Room",
    type: "psychic",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "V"
  },
  {
    movesID: "479",
    name: "Smack Down",
    type: "rock",
    category: "Physical",
    pp: 15,
    power: 50,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "480",
    name: "Storm Throw",
    type: "fighting",
    category: "Physical",
    pp: 10,
    power: 60,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "481",
    name: "Flame Burst",
    type: "fire",
    category: "Special",
    pp: 15,
    power: 70,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "482",
    name: "Sludge Wave",
    type: "poison",
    category: "Special",
    pp: 10,
    power: 95,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "483",
    name: "Quiver Dance",
    type: "bug",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "V"
  },
  {
    movesID: "484",
    name: "Heavy Slam",
    type: "steel",
    category: "Physical",
    pp: 10,
    power: "—",
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "485",
    name: "Synchronoise",
    type: "psychic",
    category: "Special",
    pp: 10,
    power: 120,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "486",
    name: "Electro Ball",
    type: "electric",
    category: "Special",
    pp: 10,
    power: "—",
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "487",
    name: "Soak",
    type: "water",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "488",
    name: "Flame Charge",
    type: "fire",
    category: "Physical",
    pp: 20,
    power: 50,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "489",
    name: "Coil",
    type: "poison",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "V"
  },
  {
    movesID: "490",
    name: "Low Sweep",
    type: "fighting",
    category: "Physical",
    pp: 20,
    power: 65,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "491",
    name: "Acid Spray",
    type: "poison",
    category: "Special",
    pp: 20,
    power: 40,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "492",
    name: "Foul Play",
    type: "dark",
    category: "Physical",
    pp: 15,
    power: 95,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "493",
    name: "Simple Beam",
    type: "normal",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "494",
    name: "Entrainment",
    type: "normal",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "495",
    name: "After You",
    type: "normal",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: "—",
    gen: "V"
  },
  {
    movesID: "496",
    name: "Round",
    type: "normal",
    category: "Special",
    pp: 15,
    power: 60,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "497",
    name: "Echoed Voice",
    type: "normal",
    category: "Special",
    pp: 15,
    power: 40,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "498",
    name: "Chip Away",
    type: "normal",
    category: "Physical",
    pp: 20,
    power: 70,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "499",
    name: "Clear Smog",
    type: "poison",
    category: "Special",
    pp: 15,
    power: 50,
    accuracy: "—",
    gen: "V"
  },
  {
    movesID: "500",
    name: "Stored Power",
    type: "psychic",
    category: "Special",
    pp: 10,
    power: 20,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "501",
    name: "Quick Guard",
    type: "fighting",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: "—",
    gen: "V"
  },
  {
    movesID: "502",
    name: "Ally Switch",
    type: "psychic",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: "—",
    gen: "V"
  },
  {
    movesID: "503",
    name: "Scald",
    type: "water",
    category: "Special",
    pp: 15,
    power: 80,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "504",
    name: "Shell Smash",
    type: "normal",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: "—",
    gen: "V"
  },
  {
    movesID: "505",
    name: "Heal Pulse",
    type: "psychic",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "V"
  },
  {
    movesID: "506",
    name: "Hex",
    type: "ghost",
    category: "Special",
    pp: 10,
    power: 65,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "507",
    name: "Sky Drop",
    type: "flying",
    category: "Physical",
    pp: 10,
    power: 60,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "508",
    name: "Shift Gear",
    type: "steel",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "V"
  },
  {
    movesID: "509",
    name: "Circle Throw",
    type: "fighting",
    category: "Physical",
    pp: 10,
    power: 60,
    accuracy: 0.9,
    gen: "V"
  },
  {
    movesID: "510",
    name: "Incinerate",
    type: "fire",
    category: "Special",
    pp: 15,
    power: 60,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "511",
    name: "Quash",
    type: "dark",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "512",
    name: "Acrobatics",
    type: "flying",
    category: "Physical",
    pp: 15,
    power: 55,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "513",
    name: "Reflect Type",
    type: "normal",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: "—",
    gen: "V"
  },
  {
    movesID: "514",
    name: "Retaliate",
    type: "normal",
    category: "Physical",
    pp: 5,
    power: 70,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "515",
    name: "Final Gambit",
    type: "fighting",
    category: "Special",
    pp: 5,
    power: "—",
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "516",
    name: "Bestow",
    type: "normal",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: "—",
    gen: "V"
  },
  {
    movesID: "517",
    name: "Inferno",
    type: "fire",
    category: "Special",
    pp: 5,
    power: 100,
    accuracy: 0.5,
    gen: "V"
  },
  {
    movesID: "518",
    name: "Water Pledge",
    type: "water",
    category: "Special",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "519",
    name: "Fire Pledge",
    type: "fire",
    category: "Special",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "520",
    name: "Grass Pledge",
    type: "grass",
    category: "Special",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "521",
    name: "Volt Switch",
    type: "electric",
    category: "Special",
    pp: 20,
    power: 70,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "522",
    name: "Struggle Bug",
    type: "bug",
    category: "Special",
    pp: 20,
    power: 50,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "523",
    name: "Bulldoze",
    type: "ground",
    category: "Physical",
    pp: 20,
    power: 60,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "524",
    name: "Frost Breath",
    type: "ice",
    category: "Special",
    pp: 10,
    power: 60,
    accuracy: 0.9,
    gen: "V"
  },
  {
    movesID: "525",
    name: "Dragon Tail",
    type: "dragon",
    category: "Physical",
    pp: 10,
    power: 60,
    accuracy: 0.9,
    gen: "V"
  },
  {
    movesID: "526",
    name: "Work Up",
    type: "normal",
    category: "Status",
    pp: 30,
    power: "—",
    accuracy: "—",
    gen: "V"
  },
  {
    movesID: "527",
    name: "Electroweb",
    type: "electric",
    category: "Special",
    pp: 15,
    power: 55,
    accuracy: 0.95,
    gen: "V"
  },
  {
    movesID: "528",
    name: "Wild Charge",
    type: "electric",
    category: "Physical",
    pp: 15,
    power: 90,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "529",
    name: "Drill Run",
    type: "ground",
    category: "Physical",
    pp: 10,
    power: 80,
    accuracy: 0.95,
    gen: "V"
  },
  {
    movesID: "530",
    name: "Dual Chop",
    type: "dragon",
    category: "Physical",
    pp: 15,
    power: 40,
    accuracy: 0.9,
    gen: "V"
  },
  {
    movesID: "531",
    name: "Heart Stamp",
    type: "psychic",
    category: "Physical",
    pp: 25,
    power: 60,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "532",
    name: "Horn Leech",
    type: "grass",
    category: "Physical",
    pp: 10,
    power: 75,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "533",
    name: "Sacred Sword",
    type: "fighting",
    category: "Physical",
    pp: 15,
    power: 90,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "534",
    name: "Razor Shell",
    type: "water",
    category: "Physical",
    pp: 10,
    power: 75,
    accuracy: 0.95,
    gen: "V"
  },
  {
    movesID: "535",
    name: "Heat Crash",
    type: "fire",
    category: "Physical",
    pp: 10,
    power: "—",
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "536",
    name: "Leaf Tornado",
    type: "grass",
    category: "Special",
    pp: 10,
    power: 65,
    accuracy: 0.9,
    gen: "V"
  },
  {
    movesID: "537",
    name: "Steamroller",
    type: "bug",
    category: "Physical",
    pp: 20,
    power: 65,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "538",
    name: "Cotton Guard",
    type: "grass",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "V"
  },
  {
    movesID: "539",
    name: "Night Daze",
    type: "dark",
    category: "Special",
    pp: 10,
    power: 85,
    accuracy: 0.95,
    gen: "V"
  },
  {
    movesID: "540",
    name: "Psystrike",
    type: "psychic",
    category: "Special",
    pp: 10,
    power: 100,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "541",
    name: "Tail Slap",
    type: "normal",
    category: "Physical",
    pp: 10,
    power: 25,
    accuracy: 0.85,
    gen: "V"
  },
  {
    movesID: "542",
    name: "Hurricane",
    type: "flying",
    category: "Special",
    pp: 10,
    power: 110,
    accuracy: 0.7,
    gen: "V"
  },
  {
    movesID: "543",
    name: "Head Charge",
    type: "normal",
    category: "Physical",
    pp: 15,
    power: 120,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "544",
    name: "Gear Grind",
    type: "steel",
    category: "Physical",
    pp: 15,
    power: 50,
    accuracy: 0.85,
    gen: "V"
  },
  {
    movesID: "545",
    name: "Searing Shot",
    type: "fire",
    category: "Special",
    pp: 5,
    power: 100,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "546",
    name: "Techno Blast",
    type: "normal",
    category: "Special",
    pp: 5,
    power: 120,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "547",
    name: "Relic Song",
    type: "normal",
    category: "Special",
    pp: 10,
    power: 75,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "548",
    name: "Secret Sword",
    type: "fighting",
    category: "Special",
    pp: 10,
    power: 85,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "549",
    name: "Glaciate",
    type: "ice",
    category: "Special",
    pp: 10,
    power: 65,
    accuracy: 0.95,
    gen: "V"
  },
  {
    movesID: "550",
    name: "Bolt Strike",
    type: "electric",
    category: "Physical",
    pp: 5,
    power: 130,
    accuracy: 0.85,
    gen: "V"
  },
  {
    movesID: "551",
    name: "Blue Flare",
    type: "fire",
    category: "Special",
    pp: 5,
    power: 130,
    accuracy: 0.85,
    gen: "V"
  },
  {
    movesID: "552",
    name: "Fiery Dance",
    type: "fire",
    category: "Special",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "553",
    name: "Freeze Shock",
    type: "ice",
    category: "Physical",
    pp: 5,
    power: 140,
    accuracy: 0.9,
    gen: "V"
  },
  {
    movesID: "554",
    name: "Ice Burn",
    type: "ice",
    category: "Special",
    pp: 5,
    power: 140,
    accuracy: 0.9,
    gen: "V"
  },
  {
    movesID: "555",
    name: "Snarl",
    type: "dark",
    category: "Special",
    pp: 15,
    power: 55,
    accuracy: 0.95,
    gen: "V"
  },
  {
    movesID: "556",
    name: "Icicle Crash",
    type: "ice",
    category: "Physical",
    pp: 10,
    power: 85,
    accuracy: 0.9,
    gen: "V"
  },
  {
    movesID: "557",
    name: "V-create",
    type: "fire",
    category: "Physical",
    pp: 5,
    power: 180,
    accuracy: 0.95,
    gen: "V"
  },
  {
    movesID: "558",
    name: "Fusion Flare",
    type: "fire",
    category: "Special",
    pp: 5,
    power: 100,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "559",
    name: "Fusion Bolt",
    type: "electric",
    category: "Physical",
    pp: 5,
    power: 100,
    accuracy: 1,
    gen: "V"
  },
  {
    movesID: "560",
    name: "Flying Press",
    type: "fighting",
    category: "Physical",
    pp: 10,
    power: 100,
    accuracy: 0.95,
    gen: "VI"
  },
  {
    movesID: "561",
    name: "Mat Block",
    type: "fighting",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VI"
  },
  {
    movesID: "562",
    name: "Belch",
    type: "poison",
    category: "Special",
    pp: 10,
    power: 120,
    accuracy: 0.9,
    gen: "VI"
  },
  {
    movesID: "563",
    name: "Rototiller",
    type: "ground",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VI"
  },
  {
    movesID: "564",
    name: "Sticky Web",
    type: "bug",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "VI"
  },
  {
    movesID: "565",
    name: "Fell Stinger",
    type: "bug",
    category: "Physical",
    pp: 25,
    power: 50,
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "566",
    name: "Phantom Force",
    type: "ghost",
    category: "Physical",
    pp: 10,
    power: 90,
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "567",
    name: "Trick-or-Treat",
    type: "ghost",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "568",
    name: "Noble Roar",
    type: "normal",
    category: "Status",
    pp: 30,
    power: "—",
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "569",
    name: "Ion Deluge",
    type: "electric",
    category: "Status",
    pp: 25,
    power: "—",
    accuracy: "—",
    gen: "VI"
  },
  {
    movesID: "570",
    name: "Parabolic Charge",
    type: "electric",
    category: "Special",
    pp: 20,
    power: 65,
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "571",
    name: "Forest's Curse",
    type: "grass",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "572",
    name: "Petal Blizzard",
    type: "grass",
    category: "Physical",
    pp: 15,
    power: 90,
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "573",
    name: "Freeze-Dry",
    type: "ice",
    category: "Special",
    pp: 20,
    power: 70,
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "574",
    name: "Disarming Voice",
    type: "fairy",
    category: "Special",
    pp: 15,
    power: 40,
    accuracy: "—",
    gen: "VI"
  },
  {
    movesID: "575",
    name: "Parting Shot",
    type: "dark",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "576",
    name: "Topsy-Turvy",
    type: "dark",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "VI"
  },
  {
    movesID: "577",
    name: "Draining Kiss",
    type: "fairy",
    category: "Special",
    pp: 10,
    power: 50,
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "578",
    name: "Crafty Shield",
    type: "fairy",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VI"
  },
  {
    movesID: "579",
    name: "Flower Shield",
    type: "fairy",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VI"
  },
  {
    movesID: "580",
    name: "Grassy Terrain",
    type: "grass",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VI"
  },
  {
    movesID: "581",
    name: "Misty Terrain",
    type: "fairy",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VI"
  },
  {
    movesID: "582",
    name: "Electrify",
    type: "electric",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "VI"
  },
  {
    movesID: "583",
    name: "Play Rough",
    type: "fairy",
    category: "Physical",
    pp: 10,
    power: 90,
    accuracy: 0.9,
    gen: "VI"
  },
  {
    movesID: "584",
    name: "Fairy Wind",
    type: "fairy",
    category: "Special",
    pp: 30,
    power: 40,
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "585",
    name: "Moonblast",
    type: "fairy",
    category: "Special",
    pp: 15,
    power: 95,
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "586",
    name: "Boomburst",
    type: "normal",
    category: "Special",
    pp: 10,
    power: 140,
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "587",
    name: "Fairy Lock",
    type: "fairy",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VI"
  },
  {
    movesID: "588",
    name: "King's Shield",
    type: "steel",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VI"
  },
  {
    movesID: "589",
    name: "Play Nice",
    type: "normal",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "VI"
  },
  {
    movesID: "590",
    name: "Confide",
    type: "normal",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "VI"
  },
  {
    movesID: "591",
    name: "Diamond Storm",
    type: "rock",
    category: "Physical",
    pp: 5,
    power: 100,
    accuracy: 0.95,
    gen: "VI"
  },
  {
    movesID: "592",
    name: "Steam Eruption",
    type: "water",
    category: "Special",
    pp: 5,
    power: 110,
    accuracy: 0.95,
    gen: "VI"
  },
  {
    movesID: "593",
    name: "Hyperspace Hole",
    type: "psychic",
    category: "Special",
    pp: 5,
    power: 80,
    accuracy: "—",
    gen: "VI"
  },
  {
    movesID: "594",
    name: "Water Shuriken",
    type: "water",
    category: "Special",
    pp: 20,
    power: 15,
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "595",
    name: "Mystical Fire",
    type: "fire",
    category: "Special",
    pp: 10,
    power: 75,
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "596",
    name: "Spiky Shield",
    type: "grass",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VI"
  },
  {
    movesID: "597",
    name: "Aromatic Mist",
    type: "fairy",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "VI"
  },
  {
    movesID: "598",
    name: "Eerie Impulse",
    type: "electric",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "599",
    name: "Venom Drench",
    type: "poison",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "600",
    name: "Powder",
    type: "bug",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "601",
    name: "Geomancy",
    type: "fairy",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VI"
  },
  {
    movesID: "602",
    name: "Magnetic Flux",
    type: "electric",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "VI"
  },
  {
    movesID: "603",
    name: "Happy Hour",
    type: "normal",
    category: "Status",
    pp: 30,
    power: "—",
    accuracy: "—",
    gen: "VI"
  },
  {
    movesID: "604",
    name: "Electric Terrain",
    type: "electric",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VI"
  },
  {
    movesID: "605",
    name: "Dazzling Gleam",
    type: "fairy",
    category: "Special",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "606",
    name: "Celebrate",
    type: "normal",
    category: "Status",
    pp: 40,
    power: "—",
    accuracy: "—",
    gen: "VI"
  },
  {
    movesID: "607",
    name: "Hold Hands",
    type: "normal",
    category: "Status",
    pp: 40,
    power: "—",
    accuracy: "—",
    gen: "VI"
  },
  {
    movesID: "608",
    name: "Baby-Doll Eyes",
    type: "fairy",
    category: "Status",
    pp: 30,
    power: "—",
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "609",
    name: "Nuzzle",
    type: "electric",
    category: "Physical",
    pp: 20,
    power: 20,
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "610",
    name: "Hold Back",
    type: "normal",
    category: "Physical",
    pp: 40,
    power: 40,
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "611",
    name: "Infestation",
    type: "bug",
    category: "Special",
    pp: 20,
    power: 20,
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "612",
    name: "Power-Up Punch",
    type: "fighting",
    category: "Physical",
    pp: 20,
    power: 40,
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "613",
    name: "Oblivion Wing",
    type: "flying",
    category: "Special",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "614",
    name: "Thousand Arrows",
    type: "ground",
    category: "Physical",
    pp: 10,
    power: 90,
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "615",
    name: "Thousand Waves",
    type: "ground",
    category: "Physical",
    pp: 10,
    power: 90,
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "616",
    name: "Land's Wrath",
    type: "ground",
    category: "Physical",
    pp: 10,
    power: 90,
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "617",
    name: "Light of Ruin",
    type: "fairy",
    category: "Special",
    pp: 5,
    power: 140,
    accuracy: 0.9,
    gen: "VI"
  },
  {
    movesID: "618",
    name: "Origin Pulse",
    type: "water",
    category: "Special",
    pp: 10,
    power: 110,
    accuracy: 0.85,
    gen: "VI"
  },
  {
    movesID: "619",
    name: "Precipice Blades",
    type: "ground",
    category: "Physical",
    pp: 10,
    power: 120,
    accuracy: 0.85,
    gen: "VI"
  },
  {
    movesID: "620",
    name: "Dragon Ascent",
    type: "flying",
    category: "Physical",
    pp: 5,
    power: 120,
    accuracy: 1,
    gen: "VI"
  },
  {
    movesID: "621",
    name: "Hyperspace Fury",
    type: "dark",
    category: "Physical",
    pp: 5,
    power: 100,
    accuracy: "—",
    gen: "VI"
  },
  {
    movesID: "659",
    name: "Shore Up",
    type: "ground",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "VII"
  },
  {
    movesID: "660",
    name: "First Impression",
    type: "bug",
    category: "Physical",
    pp: 10,
    power: 90,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "661",
    name: "Baneful Bunker",
    type: "poison",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VII"
  },
  {
    movesID: "662",
    name: "Spirit Shackle",
    type: "ghost",
    category: "Physical",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "663",
    name: "Darkest Lariat",
    type: "dark",
    category: "Physical",
    pp: 10,
    power: 85,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "664",
    name: "Sparkling Aria",
    type: "water",
    category: "Special",
    pp: 10,
    power: 90,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "665",
    name: "Ice Hammer",
    type: "ice",
    category: "Physical",
    pp: 10,
    power: 100,
    accuracy: 0.9,
    gen: "VII"
  },
  {
    movesID: "666",
    name: "Floral Healing",
    type: "fairy",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VII"
  },
  {
    movesID: "667",
    name: "High Horsepower",
    type: "ground",
    category: "Physical",
    pp: 10,
    power: 95,
    accuracy: 0.95,
    gen: "VII"
  },
  {
    movesID: "668",
    name: "Strength Sap",
    type: "grass",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "669",
    name: "Solar Blade",
    type: "grass",
    category: "Physical",
    pp: 10,
    power: 125,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "670",
    name: "Leafage",
    type: "grass",
    category: "Physical",
    pp: 40,
    power: 40,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "671",
    name: "Spotlight",
    type: "normal",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: "—",
    gen: "VII"
  },
  {
    movesID: "672",
    name: "Toxic Thread",
    type: "poison",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "673",
    name: "Laser Focus",
    type: "normal",
    category: "Status",
    pp: 30,
    power: "—",
    accuracy: "—",
    gen: "VII"
  },
  {
    movesID: "674",
    name: "Gear Up",
    type: "steel",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "VII"
  },
  {
    movesID: "675",
    name: "Throat Chop",
    type: "dark",
    category: "Physical",
    pp: 15,
    power: 80,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "676",
    name: "Pollen Puff",
    type: "bug",
    category: "Special",
    pp: 15,
    power: 90,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "677",
    name: "Anchor Shot",
    type: "steel",
    category: "Physical",
    pp: 20,
    power: 80,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "678",
    name: "Psychic Terrain",
    type: "psychic",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VII"
  },
  {
    movesID: "679",
    name: "Lunge",
    type: "bug",
    category: "Physical",
    pp: 15,
    power: 80,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "680",
    name: "Fire Lash",
    type: "fire",
    category: "Physical",
    pp: 15,
    power: 80,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "681",
    name: "Power Trip",
    type: "dark",
    category: "Physical",
    pp: 10,
    power: 20,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "682",
    name: "Burn Up",
    type: "fire",
    category: "Special",
    pp: 5,
    power: 130,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "683",
    name: "Speed Swap",
    type: "psychic",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VII"
  },
  {
    movesID: "684",
    name: "Smart Strike",
    type: "steel",
    category: "Physical",
    pp: 10,
    power: 70,
    accuracy: "—",
    gen: "VII"
  },
  {
    movesID: "685",
    name: "Purify",
    type: "poison",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "VII"
  },
  {
    movesID: "686",
    name: "Revelation Dance",
    type: "normal",
    category: "Special",
    pp: 15,
    power: 90,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "687",
    name: "Core Enforcer",
    type: "dragon",
    category: "Special",
    pp: 10,
    power: 100,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "688",
    name: "Trop Kick",
    type: "grass",
    category: "Physical",
    pp: 15,
    power: 70,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "689",
    name: "Instruct",
    type: "psychic",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: "—",
    gen: "VII"
  },
  {
    movesID: "690",
    name: "Beak Blast",
    type: "flying",
    category: "Physical",
    pp: 15,
    power: 100,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "691",
    name: "Clanging Scales",
    type: "dragon",
    category: "Special",
    pp: 5,
    power: 110,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "692",
    name: "Dragon Hammer",
    type: "dragon",
    category: "Physical",
    pp: 15,
    power: 90,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "693",
    name: "Brutal Swing",
    type: "dark",
    category: "Physical",
    pp: 20,
    power: 60,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "694",
    name: "Aurora Veil",
    type: "ice",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "VII"
  },
  {
    movesID: "704",
    name: "Shell Trap",
    type: "fire",
    category: "Special",
    pp: 5,
    power: 150,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "705",
    name: "Fleur Cannon",
    type: "fairy",
    category: "Special",
    pp: 5,
    power: 130,
    accuracy: 0.9,
    gen: "VII"
  },
  {
    movesID: "706",
    name: "Psychic Fangs",
    type: "psychic",
    category: "Physical",
    pp: 10,
    power: 85,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "707",
    name: "Stomping Tantrum",
    type: "ground",
    category: "Physical",
    pp: 10,
    power: 75,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "708",
    name: "Shadow Bone",
    type: "ghost",
    category: "Physical",
    pp: 10,
    power: 85,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "709",
    name: "Accelerock",
    type: "rock",
    category: "Physical",
    pp: 20,
    power: 40,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "710",
    name: "Liquidation",
    type: "water",
    category: "Physical",
    pp: 10,
    power: 85,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "711",
    name: "Prismatic Laser",
    type: "psychic",
    category: "Special",
    pp: 10,
    power: 160,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "712",
    name: "Spectral Thief",
    type: "ghost",
    category: "Physical",
    pp: 10,
    power: 90,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "713",
    name: "Sunsteel Strike",
    type: "steel",
    category: "Physical",
    pp: 5,
    power: 100,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "714",
    name: "Moongeist Beam",
    type: "ghost",
    category: "Special",
    pp: 5,
    power: 100,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "715",
    name: "Tearful Look",
    type: "normal",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "VII"
  },
  {
    movesID: "716",
    name: "Zing Zap",
    type: "electric",
    category: "Physical",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "717",
    name: "Nature's Madness",
    type: "fairy",
    category: "Special",
    pp: 10,
    power: "—",
    accuracy: 0.9,
    gen: "VII"
  },
  {
    movesID: "718",
    name: "Multi-Attack",
    type: "normal",
    category: "Physical",
    pp: 10,
    power: 120,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "720",
    name: "Mind Blown",
    type: "fire",
    category: "Special",
    pp: 5,
    power: 150,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "721",
    name: "Plasma Fists",
    type: "electric",
    category: "Physical",
    pp: 15,
    power: 100,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "722",
    name: "Photon Geyser",
    type: "psychic",
    category: "Special",
    pp: 5,
    power: 100,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "729",
    name: "Zippy Zap",
    type: "electric",
    category: "Physical",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "730",
    name: "Splishy Splash",
    type: "water",
    category: "Special",
    pp: 15,
    power: 90,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "731",
    name: "Floaty Fall",
    type: "flying",
    category: "Physical",
    pp: 15,
    power: 90,
    accuracy: 0.95,
    gen: "VII"
  },
  {
    movesID: "732",
    name: "Pika Papow",
    type: "electric",
    category: "Special",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "VII"
  },
  {
    movesID: "733",
    name: "Bouncy Bubble",
    type: "water",
    category: "Special",
    pp: 20,
    power: 60,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "734",
    name: "Buzzy Buzz",
    type: "electric",
    category: "Special",
    pp: 20,
    power: 60,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "735",
    name: "Sizzly Slide",
    type: "fire",
    category: "Physical",
    pp: 20,
    power: 60,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "736",
    name: "Glitzy Glow",
    type: "psychic",
    category: "Special",
    pp: 15,
    power: 80,
    accuracy: 0.95,
    gen: "VII"
  },
  {
    movesID: "737",
    name: "Baddy Bad",
    type: "dark",
    category: "Special",
    pp: 15,
    power: 80,
    accuracy: 0.95,
    gen: "VII"
  },
  {
    movesID: "738",
    name: "Sappy Seed",
    type: "grass",
    category: "Physical",
    pp: 10,
    power: 100,
    accuracy: 0.9,
    gen: "VII"
  },
  {
    movesID: "739",
    name: "Freezy Frost",
    type: "ice",
    category: "Special",
    pp: 10,
    power: 100,
    accuracy: 0.9,
    gen: "VII"
  },
  {
    movesID: "740",
    name: "Sparkly Swirl",
    type: "fairy",
    category: "Special",
    pp: 5,
    power: 120,
    accuracy: 0.85,
    gen: "VII"
  },
  {
    movesID: "741",
    name: "Veevee Volley",
    type: "normal",
    category: "Physical",
    pp: 20,
    power: "—",
    accuracy: "—",
    gen: "VII"
  },
  {
    movesID: "742",
    name: "Double Iron Bash",
    type: "steel",
    category: "Physical",
    pp: 5,
    power: 60,
    accuracy: 1,
    gen: "VII"
  },
  {
    movesID: "743",
    name: "Max Guard",
    type: "normal",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "744",
    name: "Dynamax Cannon",
    type: "dragon",
    category: "Special",
    pp: 5,
    power: 100,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "745",
    name: "Snipe Shot",
    type: "water",
    category: "Special",
    pp: 15,
    power: 80,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "746",
    name: "Jaw Lock",
    type: "dark",
    category: "Physical",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "747",
    name: "Stuff Cheeks",
    type: "normal",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "748",
    name: "No Retreat",
    type: "fighting",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "749",
    name: "Tar Shot",
    type: "rock",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "750",
    name: "Magic Powder",
    type: "psychic",
    category: "Status",
    pp: 20,
    power: "—",
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "751",
    name: "Dragon Darts",
    type: "dragon",
    category: "Physical",
    pp: 10,
    power: 50,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "752",
    name: "Teatime",
    type: "normal",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "753",
    name: "Octolock",
    type: "fighting",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "754",
    name: "Bolt Beak",
    type: "electric",
    category: "Physical",
    pp: 10,
    power: 85,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "755",
    name: "Fishious Rend",
    type: "water",
    category: "Physical",
    pp: 10,
    power: 85,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "756",
    name: "Court Change",
    type: "normal",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "757",
    name: "Max Flare",
    type: "fire",
    category: "???",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "758",
    name: "Max Flutterby",
    type: "bug",
    category: "???",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "759",
    name: "Max Lightning",
    type: "electric",
    category: "???",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "760",
    name: "Max Strike",
    type: "normal",
    category: "???",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "761",
    name: "Max Knuckle",
    type: "fighting",
    category: "???",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "762",
    name: "Max Phantasm",
    type: "ghost",
    category: "???",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "763",
    name: "Max Hailstorm",
    type: "ice",
    category: "???",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "764",
    name: "Max Ooze",
    type: "poison",
    category: "???",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "765",
    name: "Max Geyser",
    type: "water",
    category: "???",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "766",
    name: "Max Airstream",
    type: "flying",
    category: "???",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "767",
    name: "Max Starfall",
    type: "fairy",
    category: "???",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "768",
    name: "Max Wyrmwind",
    type: "dragon",
    category: "???",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "769",
    name: "Max Mindstorm",
    type: "psychic",
    category: "???",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "770",
    name: "Max Rockfall",
    type: "rock",
    category: "???",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "771",
    name: "Max Quake",
    type: "ground",
    category: "???",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "772",
    name: "Max Darkness",
    type: "dark",
    category: "???",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "773",
    name: "Max Overgrowth",
    type: "grass",
    category: "???",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "774",
    name: "Max Steelspike",
    type: "steel",
    category: "???",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "775",
    name: "Clangorous Soul",
    type: "dragon",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "776",
    name: "Body Press",
    type: "fighting",
    category: "Physical",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "777",
    name: "Decorate",
    type: "fairy",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "778",
    name: "Drum Beating",
    type: "grass",
    category: "Physical",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "779",
    name: "Snap Trap",
    type: "grass",
    category: "Physical",
    pp: 15,
    power: 35,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "780",
    name: "Pyro Ball",
    type: "fire",
    category: "Physical",
    pp: 5,
    power: 120,
    accuracy: 0.9,
    gen: "VIII"
  },
  {
    movesID: "781",
    name: "Behemoth Blade",
    type: "steel",
    category: "Physical",
    pp: 5,
    power: 100,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "782",
    name: "Behemoth Bash",
    type: "steel",
    category: "Physical",
    pp: 5,
    power: 100,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "783",
    name: "Aura Wheel",
    type: "electric",
    category: "Physical",
    pp: 10,
    power: 110,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "784",
    name: "Breaking Swipe",
    type: "dragon",
    category: "Physical",
    pp: 15,
    power: 60,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "785",
    name: "Branch Poke",
    type: "grass",
    category: "Physical",
    pp: 40,
    power: 40,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "786",
    name: "Overdrive",
    type: "electric",
    category: "Special",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "787",
    name: "Apple Acid",
    type: "grass",
    category: "Special",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "788",
    name: "Grav Apple",
    type: "grass",
    category: "Physical",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "789",
    name: "Spirit Break",
    type: "fairy",
    category: "Physical",
    pp: 15,
    power: 75,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "790",
    name: "Strange Steam",
    type: "fairy",
    category: "Special",
    pp: 10,
    power: 90,
    accuracy: 0.95,
    gen: "VIII"
  },
  {
    movesID: "791",
    name: "Life Dew",
    type: "water",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "792",
    name: "Obstruct",
    type: "dark",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "793",
    name: "False Surrender",
    type: "dark",
    category: "Physical",
    pp: 10,
    power: 80,
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "794",
    name: "Meteor Assault",
    type: "fighting",
    category: "Physical",
    pp: 5,
    power: 150,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "795",
    name: "Eternabeam",
    type: "dragon",
    category: "Special",
    pp: 5,
    power: 160,
    accuracy: 0.9,
    gen: "VIII"
  },
  {
    movesID: "796",
    name: "Steel Beam",
    type: "steel",
    category: "Special",
    pp: 5,
    power: 140,
    accuracy: 0.95,
    gen: "VIII"
  },
  {
    movesID: "797",
    name: "Expanding Force",
    type: "psychic",
    category: "Special",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "798",
    name: "Steel Roller",
    type: "steel",
    category: "Physical",
    pp: 5,
    power: 130,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "799",
    name: "Scale Shot",
    type: "dragon",
    category: "Physical",
    pp: 20,
    power: 25,
    accuracy: 0.9,
    gen: "VIII"
  },
  {
    movesID: "800",
    name: "Meteor Beam",
    type: "rock",
    category: "Special",
    pp: 10,
    power: 120,
    accuracy: 0.9,
    gen: "VIII"
  },
  {
    movesID: "801",
    name: "Shell Side Arm",
    type: "poison",
    category: "Special",
    pp: 10,
    power: 90,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "802",
    name: "Misty Explosion",
    type: "fairy",
    category: "Special",
    pp: 5,
    power: 100,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "803",
    name: "Grassy Glide",
    type: "grass",
    category: "Physical",
    pp: 20,
    power: 60,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "804",
    name: "Rising Voltage",
    type: "electric",
    category: "Special",
    pp: 20,
    power: 70,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "805",
    name: "Terrain Pulse",
    type: "normal",
    category: "Special",
    pp: 10,
    power: 50,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "806",
    name: "Skitter Smack",
    type: "bug",
    category: "Physical",
    pp: 10,
    power: 70,
    accuracy: 0.9,
    gen: "VIII"
  },
  {
    movesID: "807",
    name: "Burning Jealousy",
    type: "fire",
    category: "Special",
    pp: 5,
    power: 70,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "808",
    name: "Lash Out",
    type: "dark",
    category: "Physical",
    pp: 5,
    power: 75,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "809",
    name: "Poltergeist",
    type: "ghost",
    category: "Physical",
    pp: 5,
    power: 110,
    accuracy: 0.9,
    gen: "VIII"
  },
  {
    movesID: "810",
    name: "Corrosive Gas",
    type: "poison",
    category: "Status",
    pp: 40,
    power: "—",
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "811",
    name: "Coaching",
    type: "fighting",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "812",
    name: "Flip Turn",
    type: "water",
    category: "Physical",
    pp: 20,
    power: 60,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "813",
    name: "Triple Axel",
    type: "ice",
    category: "Physical",
    pp: 10,
    power: 20,
    accuracy: 0.9,
    gen: "VIII"
  },
  {
    movesID: "814",
    name: "Dual Wingbeat",
    type: "flying",
    category: "Physical",
    pp: 10,
    power: 40,
    accuracy: 0.9,
    gen: "VIII"
  },
  {
    movesID: "815",
    name: "Scorching Sands",
    type: "ground",
    category: "Special",
    pp: 10,
    power: 70,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "816",
    name: "Jungle Healing",
    type: "grass",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "817",
    name: "Wicked Blow",
    type: "dark",
    category: "Physical",
    pp: 5,
    power: 75,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "818",
    name: "Surging Strikes",
    type: "water",
    category: "Physical",
    pp: 5,
    power: 25,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "819",
    name: "Thunder Cage",
    type: "electric",
    category: "Special",
    pp: 15,
    power: 80,
    accuracy: 0.9,
    gen: "VIII"
  },
  {
    movesID: "820",
    name: "Dragon Energy",
    type: "dragon",
    category: "Special",
    pp: 5,
    power: 150,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "821",
    name: "Freezing Glare",
    type: "psychic",
    category: "Special",
    pp: 10,
    power: 90,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "822",
    name: "Fiery Wrath",
    type: "dark",
    category: "Special",
    pp: 10,
    power: 90,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "823",
    name: "Thunderous Kick",
    type: "fighting",
    category: "Physical",
    pp: 10,
    power: 90,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "824",
    name: "Glacial Lance",
    type: "ice",
    category: "Physical",
    pp: 5,
    power: 120,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "825",
    name: "Astral Barrage",
    type: "ghost",
    category: "Special",
    pp: 5,
    power: 120,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "826",
    name: "Eerie Spell",
    type: "psychic",
    category: "Special",
    pp: 5,
    power: 80,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "827",
    name: "Dire Claw",
    type: "poison",
    category: "Physical",
    pp: 15,
    power: 80,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "828",
    name: "Psyshield Bash",
    type: "psychic",
    category: "Physical",
    pp: 10,
    power: 70,
    accuracy: 0.9,
    gen: "VIII"
  },
  {
    movesID: "829",
    name: "Power Shift",
    type: "normal",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "830",
    name: "Stone Axe",
    type: "rock",
    category: "Physical",
    pp: 15,
    power: 65,
    accuracy: 0.9,
    gen: "VIII"
  },
  {
    movesID: "831",
    name: "Springtide Storm",
    type: "fairy",
    category: "Special",
    pp: 10,
    power: 100,
    accuracy: 0.8,
    gen: "VIII"
  },
  {
    movesID: "832",
    name: "Mystical Power",
    type: "psychic",
    category: "Special",
    pp: 10,
    power: 70,
    accuracy: 0.9,
    gen: "VIII"
  },
  {
    movesID: "833",
    name: "Raging Fury",
    type: "fire",
    category: "Physical",
    pp: 10,
    power: 120,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "834",
    name: "Wave Crash",
    type: "water",
    category: "Physical",
    pp: 10,
    power: 120,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "835",
    name: "Chloroblast",
    type: "grass",
    category: "Special",
    pp: 5,
    power: 150,
    accuracy: 0.95,
    gen: "VIII"
  },
  {
    movesID: "836",
    name: "Mountain Gale",
    type: "ice",
    category: "Physical",
    pp: 10,
    power: 100,
    accuracy: 0.85,
    gen: "VIII"
  },
  {
    movesID: "837",
    name: "Victory Dance",
    type: "fighting",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "838",
    name: "Headlong Rush",
    type: "ground",
    category: "Physical",
    pp: 5,
    power: 120,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "839",
    name: "Barb Barrage",
    type: "poison",
    category: "Physical",
    pp: 10,
    power: 60,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "840",
    name: "Esper Wing",
    type: "psychic",
    category: "Special",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "841",
    name: "Bitter Malice",
    type: "ghost",
    category: "Special",
    pp: 10,
    power: 75,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "842",
    name: "Shelter",
    type: "steel",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "843",
    name: "Triple Arrows",
    type: "fighting",
    category: "Physical",
    pp: 10,
    power: 90,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "844",
    name: "Infernal Parade",
    type: "ghost",
    category: "Special",
    pp: 15,
    power: 60,
    accuracy: 1,
    gen: "VIII"
  },
  {
    movesID: "845",
    name: "Ceaseless Edge",
    type: "dark",
    category: "Physical",
    pp: 15,
    power: 65,
    accuracy: 0.9,
    gen: "VIII"
  },
  {
    movesID: "846",
    name: "Bleakwind Storm",
    type: "flying",
    category: "Special",
    pp: 10,
    power: 100,
    accuracy: 0.8,
    gen: "VIII"
  },
  {
    movesID: "847",
    name: "Wildbolt Storm",
    type: "electric",
    category: "Special",
    pp: 10,
    power: 100,
    accuracy: 0.8,
    gen: "VIII"
  },
  {
    movesID: "848",
    name: "Sandsear Storm",
    type: "ground",
    category: "Special",
    pp: 10,
    power: 100,
    accuracy: 0.8,
    gen: "VIII"
  },
  {
    movesID: "849",
    name: "Lunar Blessing",
    type: "psychic",
    category: "Status",
    pp: 5,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "850",
    name: "Take Heart",
    type: "psychic",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "VIII"
  },
  {
    movesID: "851",
    name: "Tera Blast",
    type: "normal",
    category: "Special",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "852",
    name: "Silk Trap",
    type: "bug",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "IX"
  },
  {
    movesID: "853",
    name: "Axe Kick",
    type: "fighting",
    category: "Physical",
    pp: 10,
    power: 120,
    accuracy: 0.9,
    gen: "IX"
  },
  {
    movesID: "854",
    name: "Last Respects",
    type: "ghost",
    category: "Physical",
    pp: 10,
    power: 50,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "855",
    name: "Lumina Crash",
    type: "psychic",
    category: "Special",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "856",
    name: "Order Up",
    type: "dragon",
    category: "Physical",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "857",
    name: "Jet Punch",
    type: "water",
    category: "Physical",
    pp: 15,
    power: 60,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "858",
    name: "Spicy Extract",
    type: "grass",
    category: "Status",
    pp: 15,
    power: "—",
    accuracy: "—",
    gen: "IX"
  },
  {
    movesID: "859",
    name: "Spin Out",
    type: "steel",
    category: "Physical",
    pp: 5,
    power: 100,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "860",
    name: "Population Bomb",
    type: "normal",
    category: "Physical",
    pp: 10,
    power: 20,
    accuracy: 0.9,
    gen: "IX"
  },
  {
    movesID: "861",
    name: "Ice Spinner",
    type: "ice",
    category: "Physical",
    pp: 15,
    power: 80,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "862",
    name: "Glaive Rush",
    type: "dragon",
    category: "Physical",
    pp: 5,
    power: 120,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "863",
    name: "Revival Blessing",
    type: "normal",
    category: "Status",
    pp: 1,
    power: "—",
    accuracy: "—",
    gen: "IX"
  },
  {
    movesID: "864",
    name: "Salt Cure",
    type: "rock",
    category: "Physical",
    pp: 15,
    power: 40,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "865",
    name: "Triple Dive",
    type: "water",
    category: "Physical",
    pp: 10,
    power: 30,
    accuracy: 0.95,
    gen: "IX"
  },
  {
    movesID: "866",
    name: "Mortal Spin",
    type: "poison",
    category: "Physical",
    pp: 15,
    power: 30,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "867",
    name: "Doodle",
    type: "normal",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "868",
    name: "Fillet Away",
    type: "normal",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "IX"
  },
  {
    movesID: "869",
    name: "Kowtow Cleave",
    type: "dark",
    category: "Physical",
    pp: 10,
    power: 85,
    accuracy: "—",
    gen: "IX"
  },
  {
    movesID: "870",
    name: "Flower Trick",
    type: "grass",
    category: "Physical",
    pp: 10,
    power: 70,
    accuracy: "—",
    gen: "IX"
  },
  {
    movesID: "871",
    name: "Torch Song",
    type: "fire",
    category: "Special",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "872",
    name: "Aqua Step",
    type: "water",
    category: "Physical",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "873",
    name: "Raging Bull",
    type: "normal",
    category: "Physical",
    pp: 10,
    power: 90,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "874",
    name: "Make It Rain",
    type: "steel",
    category: "Special",
    pp: 5,
    power: 120,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "875",
    name: "Psyblade",
    type: "psychic",
    category: "Physical",
    pp: 15,
    power: 80,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "876",
    name: "Hydro Steam",
    type: "water",
    category: "Special",
    pp: 15,
    power: 80,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "877",
    name: "Ruination",
    type: "dark",
    category: "Special",
    pp: 10,
    power: "—",
    accuracy: 0.9,
    gen: "IX"
  },
  {
    movesID: "878",
    name: "Collision Course",
    type: "fighting",
    category: "Physical",
    pp: 5,
    power: 100,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "879",
    name: "Electro Drift",
    type: "electric",
    category: "Special",
    pp: 5,
    power: 100,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "880",
    name: "Shed Tail",
    type: "normal",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "IX"
  },
  {
    movesID: "881",
    name: "Chilly Reception",
    type: "ice",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "IX"
  },
  {
    movesID: "882",
    name: "Tidy Up",
    type: "normal",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "IX"
  },
  {
    movesID: "883",
    name: "Snowscape",
    type: "ice",
    category: "Status",
    pp: 10,
    power: "—",
    accuracy: "—",
    gen: "IX"
  },
  {
    movesID: "884",
    name: "Pounce",
    type: "bug",
    category: "Physical",
    pp: 20,
    power: 50,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "885",
    name: "Trailblaze",
    type: "grass",
    category: "Physical",
    pp: 20,
    power: 50,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "886",
    name: "Chilling Water",
    type: "water",
    category: "Special",
    pp: 20,
    power: 50,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "887",
    name: "Hyper Drill",
    type: "normal",
    category: "Physical",
    pp: 5,
    power: 100,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "888",
    name: "Twin Beam",
    type: "psychic",
    category: "Special",
    pp: 10,
    power: 40,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "889",
    name: "Rage Fist",
    type: "ghost",
    category: "Physical",
    pp: 10,
    power: 50,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "890",
    name: "Armor Cannon",
    type: "fire",
    category: "Special",
    pp: 5,
    power: 120,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "891",
    name: "Bitter Blade",
    type: "fire",
    category: "Physical",
    pp: 10,
    power: 90,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "892",
    name: "Double Shock",
    type: "electric",
    category: "Physical",
    pp: 5,
    power: 120,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "893",
    name: "Gigaton Hammer",
    type: "steel",
    category: "Physical",
    pp: 5,
    power: 160,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "894",
    name: "Comeuppance",
    type: "dark",
    category: "Physical",
    pp: 10,
    power: "—",
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "895",
    name: "Aqua Cutter",
    type: "water",
    category: "Physical",
    pp: 20,
    power: 70,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "896",
    name: "Blazing Torque",
    type: "fire",
    category: "Physical",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "897",
    name: "Wicked Torque",
    type: "dark",
    category: "Physical",
    pp: 10,
    power: 80,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "898",
    name: "Noxious Torque",
    type: "poison",
    category: "Physical",
    pp: 10,
    power: 100,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "899",
    name: "Combat Torque",
    type: "fighting",
    category: "Physical",
    pp: 10,
    power: 100,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "900",
    name: "Magical Torque",
    type: "fairy",
    category: "Physical",
    pp: 10,
    power: 100,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "901",
    name: "Blood Moon",
    type: "normal",
    category: "Special",
    pp: 5,
    power: 140,
    accuracy: 1,
    gen: "IX"
  },
  {
    movesID: "902",
    name: "Matcha Gotcha",
    type: "grass",
    category: "Special",
    pp: 15,
    power: 80,
    accuracy: 0.9,
    gen: "IX"
  },
  {
    movesID: "903",
    name: "Syrup Bomb",
    type: "grass",
    category: "Special",
    pp: 10,
    power: 60,
    accuracy: 0.85,
    gen: "IX"
  },
  {
    movesID: "904",
    name: "Ivy Cudgel",
    type: "grass",
    category: "Physical",
    pp: 10,
    power: 100,
    accuracy: 1,
    gen: "IX"
  }
]

module.exports = moves;