import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected"),
    );
    await mongoose.connect(`${process.env.MONGODB_URI as string}/belight`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

export default connectDB;
