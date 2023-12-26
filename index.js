const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const register = require("./routes/register");
const login = require("./routes/login");
require("dotenv").config();
const pokemons = require("./models/Pokemon");
const moves = require("./models/Moves");
const types = require("./models/Type");
const teams = require('./models/StaticTeam');
const RTeam = require('./routes/RTeams');
const RMember = require('./routes/RMembers');

const app = express();

// const corsOption = {
//   origin: '*',
//   credentials:true,
//   optionSuccessStatus:200
// }

app.use(cors());

// Middleware to enable CORS
app.use((req, res, next) => {
  // Allow requests from all origins
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Define allowed methods
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  // Define allowed headers
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  // Continue to the next middleware
  next();
});

// Route for handling preflight requests (OPTIONS)
app.options('*', (req, res) => {
  // Respond to preflight requests
  res.status(200).end();
});

app.use(express.json());

// Routes
app.use("/api/register", register);
app.use("/api/login", login);
app.use('/api/teams', RTeam);
app.use('/api/members', RMember);

app.get("/", (req, res) => {
  res.send("Server Working!");
});

app.get("/pokemons", (req, res) => {
  res.send(pokemons);
});

app.get("/moves", (req, res) => {
  res.send(moves);
});

app.get("/types", (req, res) => {
  res.send(types);
});

app.get("/static-team", (req, res) => {
  res.send(teams);
});

const PORT = process.env.PORT || 5000;
const URI = process.env.DB_URI;

mongoose
  .connect(URI)
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log("Failed", err.message));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
