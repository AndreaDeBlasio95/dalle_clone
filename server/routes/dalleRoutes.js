import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const router = express.Router(); // Create a new router

// OPEN AI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Set API key here
});

/*
router.route("/").get((req, res) => {
  res.send("Hello from DALL-E!");
});
*/

let requestCount = 0; // Counter for image generation requests
const MAX_REQUESTS = 2; // Set your limit

// Reset requestCount every 24 hours (24 * 60 * 60 * 1000 milliseconds)
setInterval(() => {
  requestCount = 0;
  console.log("Request count reset to 0.");
}, 24 * 60 * 60 * 1000); // Reset every 24 hours

router.route("/").post(async (req, res) => {
  try {
    if (requestCount >= MAX_REQUESTS) {
      return res.status(429).json({
        message: "Request limit reached. Please try again later.",
      });
    }

    const { prompt } = req.body; // Get prompt from request body
    requestCount++; // Increment the counter

    // Generate the image
    const gptResponse = await openai.images.generate({
      model: "dall-e-3",
      prompt,
      n: 1,
      size: "1024x1024",
    });

    // Access the generated image URL
    const image = gptResponse.data[0].url;

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).json({ message: "Error", error: error.message });
  }
});

export default router;
