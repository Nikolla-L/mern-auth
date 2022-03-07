require('dotenv').config({path: './config.env'})
const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');


connectDB();
const port = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use(morgan());

const server = app.listen(port, () => {
    console.log('app is running on port 3001');
});

process.on('unhandledRejection', (error, promise) => {
    console.log(`error: ${error}`);
    server.close(() => process.exit(1));
})