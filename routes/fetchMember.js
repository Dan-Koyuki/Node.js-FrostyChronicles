const Member = require('../models/Member');
const joi = require('joi');
const express = require('express');
const corsMiddleware = require('../utils/corsMiddleware');

const router = express.Router();

// router.use(corsMiddleware);

router.post('/', async (req, res) => {

  const schema = joi.object({
    teamID: joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(`Joi: ${error.details[0].message}`);

  const members = await Member.find({teamID: req.body.teamID});

  res.send(members);

})

module.exports = router;