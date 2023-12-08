const joi = require('joi');
const express = require('express');
const Member = require('../models/Member');
const corsMiddleware = require('../utils/corsMiddleware');

const router = express.Router();

// router.use(corsMiddleware);

router.post('/', async (req, res) => {
  const schema = joi.object({
    teamID: joi.string().required(),
    pokemonName: joi.string().required(),
    ability: joi.string().required(),
    item: joi.string(),
    ivHP: joi.number().required().min(0).max(31),
    ivATK: joi.number().required().min(0).max(31),
    ivDEF: joi.number().required().min(0).max(31),
    ivSPA: joi.number().required().min(0).max(31),
    ivSPD: joi.number().required().min(0).max(31),
    ivSPE: joi.number().required().min(0).max(31),
    evHP: joi.number().required().min(0).max(252),
    evATK: joi.number().required().min(0).max(252),
    evDEF: joi.number().required().min(0).max(252),
    evSPA: joi.number().required().min(0).max(252),
    evSPD: joi.number().required().min(0).max(252),
    evSPE: joi.number().required().min(0).max(252),
    moves1: joi.string(),
    moves2: joi.string(),
    moves3: joi.string(),
    moves4: joi.string()
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(`Joi: ${error.details[0].message}`);

  let member = await Member.findOne({pokemonName: req.body.pokemonName, teamID: req.body.teamID});
  if (member) return res.status(400).send("Pokemon already exist in the Team..");

  member = new Member({
    teamID: req.body.teamID,
    pokemonName: req.body.pokemonName,
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
  });

  member = await member.save();

  res.send(member);
})

module.exports = router;