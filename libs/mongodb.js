import mongoose from "mongoose";

export const connectMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connect to Mongodb");
  } catch (error) {
    console.log("Error connection to Mongodb", error);
  }
};
