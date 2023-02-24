// Importing node core modules
const path = require("path");

// Importing npm modules
const express = require("express");
require("dotenv").config();

// Importing custom modules
const MONGO_CONNECTION = require("./database/dbConnection");
const campgroundRoute = require("./routes/campground.route");

// Starting the express app
const app = express();

// Setting up ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// app.set("views", "views");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", campgroundRoute);

const PORT = process.env.PORT || 4000;

// Connecting to the server
const start = async () => {
  try {
    MONGO_CONNECTION(process.env.MONGODB_URI);
    app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
