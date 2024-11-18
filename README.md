# DALL-E Clone

This repository contains the **DALL-E Clone**, a full-stack application built with **React**, **Express**, **MongoDB**, **Cloudinary**, and the **OpenAI API**. The app allows users to generate AI-powered images and share them with the community.

## Features

- Generate stunning AI images using the OpenAI API.
- Share creations with the community.
- A simple and clean structure with separate **client** and **server** folders for easy project management.

## Tech Stack

- **Frontend**: React
- **Backend**: Express.js
- **Database**: MongoDB
- **Cloud Storage**: Cloudinary
- **AI Integration**: OpenAI API

## Folder Structure

```
📂 client   # React frontend
📂 server   # Express backend with API routes
```

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB
- Cloudinary account
- OpenAI API key

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/dall-e-clone.git
   cd dall-e-clone
   ```

2. **Set Up the Client**

   ```bash
   cd client
   npm install
   ```

3. **Set Up the Server**

   ```bash
   cd ../server
   npm install
   ```

4. **Environment Variables**  
   Create a `.env` file in the **server** folder with the following keys:

   ```plaintext

   MONGODB_URI=<your-mongodb-connection-string>
   CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
   OPENAI_API_KEY=<your-openai-api-key>
   ```

5. **Run the Application**

   - Start the backend server:

     ```bash
     cd server
     npm start
     ```

   - Start the frontend development server:
     ```bash
     cd ../client
     npm run dev
     ```

6. Open your browser and navigate to the link shown in the terminal to access the app.

## Screenshots

_Add screenshots of your app showcasing the interface and features._

### Example Images

![Home Page](https://via.placeholder.com/800x400?text=Upload+an+image+here)  
![Image Creation](https://via.placeholder.com/800x400?text=Upload+an+image+here)

## License

This project is licensed under the MIT License.

## Contact

For questions or feedback, feel free to reach out!
