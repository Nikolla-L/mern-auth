const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Mongo db connected');
}

module.exports = connectDB;