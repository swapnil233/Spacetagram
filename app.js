const express = require("express");
const app = express();

// Environment Variables
require('dotenv').config;
const PORT = process.env.PORT || 3000;

// EJS View Engine
app.set("view engine", "ejs");

// Listen
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

// Serve static files
app.use(express.static('public'));