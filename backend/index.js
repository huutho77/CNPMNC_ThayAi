import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./connectionDB.js";

dotenv.config();

import productsRouter from "./routes/productsRoute.js";
import authRouter from "./routes/authRoute.js";

const app = express();
var PORT = 3000;

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use("/", cors());

// Check environment
if (process.env.NODE_ENV != null) {
  switch (process.env.NODE_ENV) {
    case "development":
      PORT = process.env.DEV_PORT;
      break;

    case "production":
      PORT = process.env.PROD_PORT;
      break;

    default:
      PORT = process.env.DEFAULT_PORT;
      break;
  }
}

// Route Default for server
app.get(["/", "/api"], (req, res) => {
  res.json({
    status: 200,
    msg: "This is route default. Please check-out route your need.",
    port: `Server running on port ${PORT}`,
  });
});

// Setup Routes
app.use("/api/products", productsRouter);
app.use("/api/auth", authRouter);

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server running on port ${PORT}...`);
  } else {
    console.log(`Server run failed.`);
  }
});
