import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
// |--- Database ---|
import connectDB from "./mongodb/connect.js";
// |--- Routes ---|
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config(); // Load environment variables from .env file

const app = express(); // Create an express app
app.use(cors()); // Enable CORS for all requests, it's a middleware
app.use(express.json({ limit: "50mb" })); // Parse JSON request body, it's a middleware, limit the body size to 50MB

// Creating API Endpoints
app.use("/api/v1/post", postRoutes); // Use post routes
app.use("/api/v1/dalle", dalleRoutes); // Use dalle routes

// Creating a route
app.get("/", async (req, res) => {
  res.send("Hello from DALL-E!");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URI); // Connect to MongoDB
    app.listen(8080, () => {
      console.log("Server is running on http://localhost:8080");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
