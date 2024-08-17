// Import Express
const express = require("express");

// Import CORS
const cors = require("cors");

// create an express application
const app = express();

// define a port
const PORT = 4000;

// Define our Middleware
// Use CORS Middleware
app.use(cors());

// Use JSON middleware to parse request bodies
app.use(express.json());

// Define our Routes
app.get("/", (request, response, next) => {
  response.json({ hello: "World!" });
});

// Error Handling
// Generic Error Handling
app.use((error, request, response, next) => {
  console.error(error.stack);
  response.status(500).json({
    error: "Something broke!",
    errorStack: error.stack,
    errorMessage: error.message,
  });
});

// 404 Resource not found Error Handling
app.use((request, response, next) => {
  response.status(404).json({
    error:
      "Resource not found. Are you sure you're looking in the right place?",
  });
});

// make the server listen on our port
app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
