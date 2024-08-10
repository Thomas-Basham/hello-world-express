// step 1: Import Express
const express = require("express");

// step 2: create an express application
const app = express();

// step 3: define a port
const PORT = 4000;

// step 4: create a simple route
app.get("/", (request, response) => {
  response.send("Hello, world!");
});

// step 5: Make the server listen on our port
app.listen(PORT, () => {
  console.log(`The helloworld server is running on http://localhost:${PORT}`);
});

// Define other routes we may need
// GET
app.get("/hello", (request, response) => {
  response.send("Hello route GET request");
});

// POST
app.post("/hello", (request, response) => {
  response.send("Hello route POST request");
});

// PUT
app.put("/hello", (request, response) => {
  response.send("Hello route PUT request");
});

// DELETE
app.delete("/hello", (request, response) => {
  response.send("Hello route DELETE request");
});
