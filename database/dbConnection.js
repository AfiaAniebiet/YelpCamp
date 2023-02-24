const mongoose = require("mongoose");

const MONGO_CONNECTION = (MONGODB_URI) => {
  mongoose.set("strictQuery", false);

  mongoose.connect(MONGODB_URI);

  mongoose.connection.on("connected", () => {
    console.log("Connection to database established");
  });

  mongoose.connection.on("error", () => {
    console.log("Failed to establish connection to database. Try again!");
    console.log(console.error);
  });
};

module.exports = MONGO_CONNECTION;
