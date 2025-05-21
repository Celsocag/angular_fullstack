const express = require('express');

const app = express();
const cors = require('cors');

const PORT = 3000;

//enable cors
app.use(cors());
//enable json parser
app.use(express.json);

// route the customer api
const customerRoutes = require('./routes/customers')
//use the route
app.use('/api/customers', customerRoutes)

app.get('/', (req, res) => {
    res.send("Welcome to my API")
});

app.listen(PORT, (err) => {
    !err ? console.log("Server is successfulll") : 
    console.log("An error occurred: ", err)
});