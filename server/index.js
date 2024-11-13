import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config(); // Load environment variables from .env file

const app = express(); // Create an express app

app.use(cors()); // Enable CORS for all requests, it's a middleware
app.use(express.json({ limit: 50 })); // Parse JSON request body, it's a middleware, limit the body size to 50MB

// Creating a route
app.get("/", async (req, res) => {
  res.send("Hello from DALL-E!");
});

const startServer = async () => {
  app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
  });
};

startServer();
