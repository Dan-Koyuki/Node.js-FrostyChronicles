const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const register = require("./routes/register");
const login = require("./routes/login");
const createTeam = require("./routes/createTeam");
const fetchTeam = require("./routes/fetchTeam");
const addMember = require("./routes/addMember");
const fetchMember = require("./routes/fetchMember");
require("dotenv").config();
const pokemons = require("./models/Pokemon");

const app = express();

// const corsOption = {
//   origin: '*',
//   credentials:true,
//   optionSuccessStatus:200
// }

app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://frontend-frosty-dan-koyukis-projects.vercel.app"); // Update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());

// Routes
app.use("/api/register", register);
app.use("/api/login", login);
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
