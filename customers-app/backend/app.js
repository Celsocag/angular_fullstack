const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Welcome to my API")
})

app.listen(PORT, (err) => {
    !err ? console.log("Server is successfulll") : 
    console.log("An error occurred: ", err)
})