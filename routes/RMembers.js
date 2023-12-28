const express = require('express');
const Member = require('../models/Member');
const Pokedex = require('../models/Pokemon');

const router = express.Router();

// Add New Member to a Team
router.post('/add', async(req, res) => {
  const { teamID, pokemonName } = req.body;
  let spriteFront;
  let spriteBack;

  Pokedex.forEach(pokemon => {
    if (pokemon.name === pokemonName){
      spriteFront = pokemon.sprite;
      spriteBack = pokemon.back;
    }
  });

  try {
    const member = new Member({
      teamID,
      pokemonName,
      spriteFront,
      spriteBack
    });
  
    const saveMember = await member.save();
  
    res.status(200).send(saveMember); 
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Update A Member of a Team
router.put('/:id', async(req, res) => {
  // this will update the pokemon stat, like the iv, ev, and moves
  try {
    const updateMember = await Member.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          ...req.body.member
        }
      }, { new: true }
    );

    res.status(200).send(updateMember);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get One Member of a Team
router.get('/find/:id', async(req, res) => {
  try{
    const member = await Member.findById(req.params.id);
    res.status(200).send(member);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get All Member of a Team
router.get('/find', async(req, res) => {
  try {
    console.log("teamID", req.query.teamID)
    const teamID = req.query.teamID;
    let members;

    members = await Member.find({teamID: teamID});

    console.log("members is", members);

    res.status(200).send(members);
  } catch (error){
    res.status(500).send(error);
  }
});

//Delete A Member of a Team
router.delete('/find/:id', async(req, res) => {
  try {
    const deleteMember = await Member.findByIdAndDelete(req.params.id);

    res.status(200).send(deleteMember);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;