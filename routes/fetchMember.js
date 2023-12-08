const Member = require('../models/Member');
const joi = require('joi');
const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {

  const schema = joi.object({
    teamID: joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(`Joi: ${error.details[0].message}`);

  const members = await Member.find({teamID: req.body.teamID});

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.send(members);

})

module.exports = router;