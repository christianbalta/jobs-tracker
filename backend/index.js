require('dotenv').config();

const cors = require('cors');
const routes = require('./routes/routes');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(cors())

app.use(express.json());

app.listen(5000, () => {
    console.log(`Server Started at ${5000}`);
})

app.use('/api', routes);