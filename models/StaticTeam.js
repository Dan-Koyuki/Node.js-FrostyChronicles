const Teams = [
  {
    TeamID: "Test01",
    Member : [
      {
        name: "Charizard",
        level: 100,
        ivHP: 31,
        ivATK: 31,
        ivDEF: 31,
        ivSPA: 31,
        ivSPD: 31,
        ivSPE: 31,
        evHP: 4,
        evATK: 0,
        evDEF: 0,
        evSPA: 252,
        evSPD: 0,
        evSPE: 252,
        moves: ["Flamethrower", "Air Slash", "Solar Beam", "Scorching Sands"],
        sprite: "https://raw.githubusercontent.com/Dan-Koyuki/Image-Pokemon_Sprite/master/6-front-n.gif"
      }, 
      {
        name: "Venusaur",
        level: 100,
        ivHP: 31,
        ivATK: 31,
        ivDEF: 31,
        ivSPA: 31,
        ivSPD: 31,
        ivSPE: 31,
        evHP: 4,
        evATK: 0,
        evDEF: 0,
        evSPA: 252,
        evSPD: 0,
        evSPE: 252,
        moves: ["Sludge Bomb", "Giga Drain", "Earth Power", "Weather Ball"],
        sprite: "https://raw.githubusercontent.com/Dan-Koyuki/Image-Pokemon_Sprite/master/3-front-n.gif"
      },
      {
        name: "Blastoise",
        level: 100,
        ivHP: 31,
        ivATK: 31,
        ivDEF: 31,
        ivSPA: 31,
        ivSPD: 31,
        ivSPE: 31,
        evHP: 4,
        evATK: 0,
        evDEF: 0,
        evSPA: 252,
        evSPD: 0,
        evSPE: 252,
        moves: ["Hydro Pump", "Rapid Spin", "Ice Beam", "Dark Pulse"],
        sprite: "https://raw.githubusercontent.com/Dan-Koyuki/Image-Pokemon_Sprite/master/9-front-n.gif"
      },
      {
        name: "Pikachu",
        level: 100,
        ivHP: 31,
        ivATK: 31,
        ivDEF: 31,
        ivSPA: 31,
        ivSPD: 31,
        ivSPE: 31,
        evHP: 4,
        evATK: 252,
        evDEF: 0,
        evSPA: 0,
        evSPD: 0,
        evSPE: 252,
        moves: ["Volt Tackle", "Surf", "Volt Switch", "Extreme Speed"],
        sprite: "https://raw.githubusercontent.com/Dan-Koyuki/Image-Pokemon_Sprite/master/25-front-n.gif"
      }, 
      {
        name: "Snorlax",
        level: 100,
        ivHP: 31,
        ivATK: 31,
        ivDEF: 31,
        ivSPA: 31,
        ivSPD: 31,
        ivSPE: 31,
        evHP: 252,
        evATK: 0,
        evDEF: 168,
        evSPA: 0,
        evSPD: 90,
        evSPE: 0,
        moves: ["Body Slam", "Fire Punch", "Thunder Punch", "Ice Punch"],
        sprite: "https://raw.githubusercontent.com/Dan-Koyuki/Image-Pokemon_Sprite/master/143-front-n.gif"
      },
      {
        name: "Articuno",
        level: 100,
        ivHP: 31,
        ivATK: 31,
        ivDEF: 31,
        ivSPA: 31,
        ivSPD: 31,
        ivSPE: 31,
        evHP: 4,
        evATK: 0,
        evDEF: 0,
        evSPA: 252,
        evSPD: 0,
        evSPE: 252,
        moves: ["Freeze-Dry", "Air Slash", "Hurricane", "Freezing Glare"],
        sprite: "https://raw.githubusercontent.com/Dan-Koyuki/Image-Pokemon_Sprite/master/144-front-n.gif"
      }
    ]
  },
  {
    TeamID: "Test02",
    Member : [
      {
        name: "Gyarados",
        level: 100,
        ivHP: 31,
        ivATK: 31,
        ivDEF: 31,
        ivSPA: 31,
        ivSPD: 31,
        ivSPE: 31,
        evHP: 4,
        evATK: 252,
        evDEF: 0,
        evSPA: 0,
        evSPD: 0,
        evSPE: 252,
        moves: ["Earthquake", "Waterfall", "Bounce", "Crunch"],
        sprite: "https://raw.githubusercontent.com/Dan-Koyuki/Image-Pokemon_Sprite/master/130-front-n.gif"
      }, 
      {
        name: "Dragonite",
        level: 100,
        ivHP: 31,
        ivATK: 31,
        ivDEF: 31,
        ivSPA: 31,
        ivSPD: 31,
        ivSPE: 31,
        evHP: 4,
        evATK: 200,
        evDEF: 0,
        evSPA: 52,
        evSPD: 0,
        evSPE: 252,
        moves: ["Draco Meteor", "Outrage", "Earthquake", "Extreme Speed"],
        sprite: "https://raw.githubusercontent.com/Dan-Koyuki/Image-Pokemon_Sprite/master/149-front-n.gif"
      },
      {
        name: "Aerodactly",
        level: 100,
        ivHP: 31,
        ivATK: 31,
        ivDEF: 31,
        ivSPA: 31,
        ivSPD: 31,
        ivSPE: 31,
        evHP: 4,
        evATK: 252,
        evDEF: 0,
        evSPA: 0,
        evSPD: 0,
        evSPE: 252,
        moves: ["Rock Slide", "Aerial Ace", "Earthquake", "Stone Edge"],
        sprite: "https://raw.githubusercontent.com/Dan-Koyuki/Image-Pokemon_Sprite/master/142-front-n.gif"
      },
      {
        name: "Zapdos",
        level: 100,
        ivHP: 31,
        ivATK: 31,
        ivDEF: 31,
        ivSPA: 31,
        ivSPD: 31,
        ivSPE: 31,
        evHP: 4,
        evATK: 0,
        evDEF: 0,
        evSPA: 252,
        evSPD: 0,
        evSPE: 252,
        moves: ["Hurricane", "Thunder", "Volt Switch", "Heat Wave"],
        sprite: "https://raw.githubusercontent.com/Dan-Koyuki/Image-Pokemon_Sprite/master/145-front-n.gif"
      }, 
      {
        name: "Moltres",
        level: 100,
        ivHP: 31,
        ivATK: 31,
        ivDEF: 31,
        ivSPA: 31,
        ivSPD: 31,
        ivSPE: 31,
        evHP: 0,
        evATK: 0,
        evDEF: 4,
        evSPA: 252,
        evSPD: 0,
        evSPE: 252,
        moves: ["Fire Blast", "Hurricane", "Extrasensory", "Burn Up"],
        sprite: "https://raw.githubusercontent.com/Dan-Koyuki/Image-Pokemon_Sprite/master/146-front-n.gif"
      },
      {
        name: "Articuno",
        level: 100,
        ivHP: 31,
        ivATK: 31,
        ivDEF: 31,
        ivSPA: 31,
        ivSPD: 31,
        ivSPE: 31,
        evHP: 4,
        evATK: 0,
        evDEF: 0,
        evSPA: 252,
        evSPD: 0,
        evSPE: 252,
        moves: ["Freeze-Dry", "Air Slash", "Hurricane", "Freezing Glare"],
        sprite: "https://raw.githubusercontent.com/Dan-Koyuki/Image-Pokemon_Sprite/master/144-front-n.gif"
      }
    ]
  }
]

module.exports = Teams