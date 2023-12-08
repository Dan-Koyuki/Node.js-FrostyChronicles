const Team = require('../models/Team');
const joi = require('joi');
const express = require('express');
const corsMiddleware = require('../utils/corsMiddleware');

const router = express.Router();

// router.use(corsMiddleware);

router.post('/', async (req, res) => {

  const schema = joi.object({
    userID: joi.string().required()
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(`Joi: ${error.details[0].message}`);

  const team = await Team.find({userID: req.body.userID});

  const teamsArray = Array.isArray(team) ? team : [team];;

  res.send(team);

})

module.exports = router;