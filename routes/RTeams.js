const joi = require('joi');
const express = require('express');
const Team = require('../models/Team');

const router = express.Router();

// Create a Team
router.post('/create', async(req, res) => {
  // check input
  const schema = joi.object({
    _id: joi.string().required,
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
    _id: req.body._id,
    name: req.body.name,
    userID: req.body.userID
  });

  team = await team.save();

  res.send(team);
});

// Get Teams (all teams of current user)
router.get('/get', async (req, res) => {
  try {
    const { userID } = req.query; // Retrieving userID from query parameters
    console.log("UserID is", userID);
    if (!userID) {
      return res.status(400).send('UserID is required');
    }

    const teams = await Team.find({ userID });

    res.status(200).send(teams);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Delete a Team
router.delete('/get/:id', async(req, res) => {
  try {
    const team = await Team.findByIdAndDelete(req.params.id);

    res.status(200).send(team);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;