const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const register = require('./routes/register');
const login = require('./routes/login');
const createTeam = require('./routes/createTeam');
const fetchTeam = require('./routes/fetchTeam');
const addMember = require('./routes/addMember');
const fetchMember = require('./routes/fetchMember');
require('dotenv').config();
const pokemons = require('./models/Pokemon');

const app = express();

app.use(cors({
  origin: 'https://frontend-frosty.vercel.app/', // Replace with your frontend URL
  credentials: true, // If your frontend sends credentials (cookies, authorization headers)
}));

app.use(express.json());

// auth route
app.use("/api/register", register);
app.use("/api/login", login);

// team route
app.use('/api/createteam', createTeam);
app.use('/api/fetchteam', fetchTeam);

// team member route
app.use('/api/addmember', addMember);
app.use('/api/fetchmember', fetchMember);

app.get('/', (req, res) => {
  res.send("Server Working!");
})

app.get('/pokemons', (req, res) => {
  res.send(pokemons);
})

const PORT = process.env.PORT || 5000;
const URI = process.env.DB_URI;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connect(URI).then(() => console.log("MongoDB Connected!"))
.catch((err) => console.log("Failed", err.message));