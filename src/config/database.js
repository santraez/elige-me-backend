import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { MONGO_USER, MONGO_PASSWORD, MONGO_HOST, MONGO_PORT, MONGO_DATABASE } = process.env;
const MONGO_URI = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}?authSource=admin`;

const connect = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    return console.log('DATABASE IS CONNECTED');
  } catch (err) {
    return console.log('DATABASE IS NOT CONNECTED ' + err);
  };
};

export default connect;