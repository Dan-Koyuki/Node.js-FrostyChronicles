const express = require("express");
const mongoose = require("mongoose");
// const allowCors = require('./utils/allowCors');
const register = require("./routes/register");
const login = require("./routes/login");
const createTeam = require("./routes/createTeam");
const fetchTeam = require("./routes/fetchTeam");
const addMember = require("./routes/addMember");
const fetchMember = require("./routes/fetchMember");
require("dotenv").config();
const pokemons = require("./models/Pokemon");

const app = express();

// Middleware function to handle CORS headers
const allowCors = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Replace '*' with the allowed origin(s)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next(); // Continue with the request chain
  }
};

// Apply CORS middleware to all routes
app.use(allowCors);
app.use(express.json());

// Routes
app.use("/api/register", register);
app.options('/api/register', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Replace '*' with your allowed origin
  res.setHeader('Access-Control-Allow-Methods', 'POST'); // Specify allowed methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Specify allowed headers

  res.sendStatus(200); // Respond with 200 OK for preflight requests
});
app.use("/api/login", login);
app.options('/api/login', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Replace '*' with your allowed origin
  res.setHeader('Access-Control-Allow-Methods', 'POST'); // Specify allowed methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Specify allowed headers

  res.sendStatus(200); // Respond with 200 OK for preflight requests
});
app.use("/api/createteam", createTeam);
app.use("/api/fetchteam", fetchTeam);
app.use("/api/addmember", addMember);
app.use("/api/fetchmember", fetchMember);

app.get("/", (req, res) => {
  res.send("Server Working!");
});

app.get("/pokemons", (req, res) => {
  res.send(pokemons);
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
