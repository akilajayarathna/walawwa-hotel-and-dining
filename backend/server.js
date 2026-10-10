require('dotenv').config();
const express = require('express');
const cors = require('cors')
const testDb = require('./testDb');

const app = express();

// -------------- middlewares ---------------
// JSON Parse middleware
app.use(express.json());

// define allowed configurations from client
const corsOption = {
    origin: process.env.ORIGIN,         // only allow requests from this domain
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],           // allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization']    // alloweD custom headers
};
// apply cors configurations to cors middleware
app.use(cors(corsOption));

// -------------------------------------------

// check db connection
testDb();

// check server connection
app.get('/api/health', (req, res) => {
    res.status(200).json({message: "Success"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});