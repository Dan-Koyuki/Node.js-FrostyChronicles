const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const register = require("./routes/register");
const login = require("./routes/login");
const createTeam = require("./routes/createTeam");
const fetchTeam = require("./routes/fetchTeam");
const addMember = require("./routes/addMember");
const fetchMember = require("./routes/fetchMember");
const updateMember = require("./routes/updateMember");
require("dotenv").config();
const pokemons = require("./models/Pokemon");
const moves = require("./models/Moves");

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
app.use("/api/createteam", createTeam);
app.use("/api/fetchteam", fetchTeam);
app.use("/api/addmember", addMember);
app.use("/api/updatemember", updateMember);
app.use("/api/fetchmember", fetchMember);

app.get("/", (req, res) => {
  res.send("Server Working!");
});

app.get("/pokemons", (req, res) => {
  res.send(pokemons);
});

app.get("/moves", (req, res) => {
  res.send(moves);
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
