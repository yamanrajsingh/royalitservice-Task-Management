const mongoose = require("mongoose");
const connectDB = (url) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("DataBase Connection Successfull...");
    })
    .catch((err) => {
      console.log("DataBase Connection Error...");
    });
};

module.exports = connectDB;
