const express = require("express");
const app = express();

//import router from routes

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

//make a connection to the mongo database

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to the MongoDb Database succesfully!");
  }
);

//call the middlewares

app.use(express.json()); //when we use POST request
app.use(helmet());
app.use(morgan("common"));

//let put the address to use the routes

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log("Backend server is running");
});
