import mongoose from "mongoose";

export const connect_db = async () => {
  const URL = process.env.MONGODB_URI;
  try {
    await mongoose.connect(URL);
    console.log("Database connected successfully!");
  } catch (error) {
    console.log(error);
  }
};
