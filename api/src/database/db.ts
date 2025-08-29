// src/db.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  if (!MONGODB_URI) {
    console.error('Error: MONGODB_URI variable no definida. 😿');
    process.exit(1);
  }
  
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Conexion a DB correcta. 😎');
  } catch (err) {
    console.error('MongoDB conexion error 😿 :', err);
    process.exit(1);
  }
};

export default connectDB;