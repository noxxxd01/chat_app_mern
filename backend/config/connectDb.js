import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb is connected");
  } catch (err) {
    console.error("Failed to connect:", err.message);
    process.exit(1);
  }
};

export default connectDb;
