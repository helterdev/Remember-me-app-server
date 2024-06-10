import mongoose from "mongoose";
import accessenv from "../config";
export const connectDB = async () => {
  try {
    await mongoose.connect(accessenv.MONGODB_URL_DATABASE);
    console.log("Database connected");
  } catch (error) {
    console.log("Error en la DB:" + error);
  }
};
