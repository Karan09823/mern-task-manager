const express = require("express");
const app = express();
require("dotenv").config();
require("./Models/db");
const PORT = process.env.PORT || 8080;

const TaskRouter = require("./Routes/TaskRouter");
const bodyParser = require("body-parser");
const cors = require("cors");

// Configure CORS with specific options
const corsOptions = {
  origin: [
    'https://mern-task-manager-ui-beta.vercel.app', // Your production frontend
    'http://localhost:3000' // Your local development
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions)); // Enable preflight for all routes

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.use(bodyParser.json());
app.use("/tasks", TaskRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
