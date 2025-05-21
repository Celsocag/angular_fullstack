require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const mongoUri = process.env.MONGO_URI;
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
main().catch((err) => {
    console.error(err)
})

async function main() {
    //prepare connection string
    const connectionString = mongoUri
    await mongoose.connect(connectionString);
    mongoose.set('strictQuery', true);

}