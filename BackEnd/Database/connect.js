const mongoose = require("mongoose");
const connectDB = (url) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("DataBase Connection Successfull...");
    })
    .catch(() => {
      console.log("DataBase Connection Error...");
    });
};

module.exports = connectDB;
