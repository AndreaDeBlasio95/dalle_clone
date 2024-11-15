import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true); // Useful for searching in MongoDB

  return mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("Database connection error:", err));
};

export default connectDB;
