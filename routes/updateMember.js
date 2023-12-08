const joi = require('joi');
const express = require('express');
const Member = require('../models/Member');

const router = express.Router();

router.post('/', async (req, res) => {
  const schema = joi.object({
    ability: joi.string(),
    item: joi.string(),
    ivHP: joi.number().min(0).max(31),
    ivATK: joi.number().min(0).max(31),
    ivDEF: joi.number().min(0).max(31),
    ivSPA: joi.number().min(0).max(31),
    ivSPD: joi.number().min(0).max(31),
    ivSPE: joi.number().min(0).max(31),
    evHP: joi.number().min(0).max(252),
    evATK: joi.number().min(0).max(252),
    evDEF: joi.number().min(0).max(252),
    evSPA: joi.number().min(0).max(252),
    evSPD: joi.number().min(0).max(252),
    evSPE: joi.number().min(0).max(252),
    moves1: joi.string(),
    moves2: joi.string(),
    moves3: joi.string(),
    moves4: joi.string()
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(`Joi: ${error.details[0].message}`);

  let member = await Member.findOneAndUpdate(
    { pokemonName: req.body.pokemonName, teamID: req.body.teamID },
    {
      ability: req.body.ability,
      item: req.body.item,
      ivHP: req.body.ivHP,
      ivATK: req.body.ivATK,
      ivDEF: req.body.ivDEF,
      ivSPA: req.body.ivSPA,
      ivSPD: req.body.ivSPD,
      ivSPE: req.body.ivSPE,
      evHP: req.body.evHP,
      evATK: req.body.evATK,
      evDEF: req.body.evDEF,
      evSPA: req.body.evSPA,
      evSPD: req.body.evSPD,
      evSPE: req.body.evSPE,
      moves1: req.body.moves1,
      moves2: req.body.moves2,
      moves3: req.body.moves3,
      moves4: req.body.moves4
    },
    { new: true } // Return the updated member
  );
  if (!member) return res.status(400).send("Pokemon not found!");

  member = await member.save();

  res.send(member);
})

module.exports = router;