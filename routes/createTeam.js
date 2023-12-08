const joi = require('joi');
const express = require('express');
const { Team } = require('../models/Team');

const router = express.Router();

router.post('/', async (req, res) => {

  // check input
  const schema = joi.object({
    name: joi.string().min(3).max(30).required(),
    userID: joi.string().required()
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(`Joi: ${error.details[0].message}`);

  // check if team with same name exist for the a user
  let team = await Team.findOne({name: req.body.name});
  if (team) return res.status(400).send("Team already exist..");

  // create new model if team doesnt exist
  team = new Team({
    name: req.body.name,
    userID: req.body.userID
  });

  team = await team.save();

  res.send(team);
});

module.exports = router;

