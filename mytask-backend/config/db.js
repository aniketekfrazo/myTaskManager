const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if(!process.env.MONGO_URI){
      console.log('MongoDB not connected- kindly add Mongo_URI in .env file' );
      return
    }
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected- check add Mongo_URI in .env file' );
  } catch (error) {
    console.error('MongoDB connection failed', error);
    process.exit(1);
  }
};

module.exports = connectDB;
