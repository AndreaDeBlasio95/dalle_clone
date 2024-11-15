import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const router = express.Router(); // Create a new router

// OPEN AI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Set API key here
});

router.route("/").get((req, res) => {
  res.send("Hello from DALL-E!");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body; // Get prompt from request body

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
