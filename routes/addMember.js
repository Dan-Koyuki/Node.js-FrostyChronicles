const joi = require('joi');
const express = require('express');
const Member = require('../models/Member');

const router = express.Router();

router.post('/', async (req, res) => {
  const schema = joi.object({
    teamID: joi.string().required(),
    pokemonName: joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(`Joi: ${error.details[0].message}`);

  let member = await Member.findOne({pokemonName: req.body.pokemonName, teamID: req.body.teamID});
  if (member) return res.status(400).send("Pokemon already exist in the Team..");

  member = new Member({
    teamID: req.body.teamID,
    pokemonName: req.body.pokemonName,
  });

  member = await member.save();

  res.send(member);
})

module.exports = router;