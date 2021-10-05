const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const commitDetailsRoute  = require("./Routes/CommitDetails")

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", commitDetailsRoute)

  app.listen(5000, () => {
    console.log("Server is running 5000");
  });
  