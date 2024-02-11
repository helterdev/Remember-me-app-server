import mongoose from 'mongoose';
const URL_DATABASE = process.env.DATABASE || '';
export const connectDB = async () => {
  try {
    await mongoose.connect(URL_DATABASE);
    console.log('Database connected');
  } catch (error) {
    console.log('Error en la DB:' + error);
  }
};
