const express = require("express");
const indexRouter = express.Router();
const axios = require("axios");

// Environment Variables
const dotenv = require("dotenv")
dotenv.config();

const PORT = process.env.PORT || 3000
const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&start_date=2022-01-01`

indexRouter.get("/", async (req, res) => {
    try {
        const result = await axios.get(url);
        const data = result.data;

        res.render("index", {
            data
        })
    } catch (error) {
        console.log(error)
    }
})

module.exports = indexRouter