// require('dotenv').config();
// const mongoose = require('mongoose');
// const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}`;

// let client;

// async function connect() {
//   try {
//   await mongoose.connect(uri);
//   return mongoose;
//  } catch (e) {
//  console.error(e);
//   throw e; // Rethrow the error for the caller to handle
//  }
// }

// module.exports = { connect };


require('dotenv').config();
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}`;

const connect = async () => {
    try {
        await mongoose.connect(uri);
        return mongoose;
    } catch (e) {
        console.error(e);
        throw e;
    }
};

module.exports = connect;
