// db/connection.js
import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('❌ MONGO_URI is not defined in environment variables');
    }
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
    console.log(`✅ MongoDB connected: ${conn.connection.name}`);
    console.log(`✅ MongoDB connected: ${conn.connection.port}`);
    console.log(`✅ MongoDB connected: ${conn.connection.readyState}`);
    console.log(`${process.env.MONGO_URI}`);

  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
};

