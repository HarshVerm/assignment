const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const commitDetailsRoute  = require("./Routes/CommitDetails")

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", commitDetailsRoute)

mongoose.connect(
    process.env.MONGO_ATLAS_URI,
    { 
        useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
      if (err) {
        console.log("Error  connecting the database");
      } else {
        console.log("Database connected");
      }
    },
  );

  app.listen(5000, () => {
    console.log("Server is running 5000");
  });
  