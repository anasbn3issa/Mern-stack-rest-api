const mongoose = require('mongoose');

const connectDb = async () => { 
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected...'.green.inverse); // .green.inverse is for color and inverse is for background
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDb;