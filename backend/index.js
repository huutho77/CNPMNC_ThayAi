import express from "express";
import dotenv from "dotenv";

import productsRouter from "./routes/productsRoute.js";
import mainRouter from "./routes/mainRoute.js";

const app = express();
dotenv.config();
var PORT = 3000;

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
app.get("/", (req, res, next) => {
  res.json({
    status: 200,
    msg: "This is route default. Please check-out route your need.",
    port: `Server running on port ${PORT}`,
  });
});

// Setup Routes
app.use("/products", productsRouter);
app.use("/main", mainRouter);

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server running on port ${PORT}...`);
  } else {
    console.log(`Server run failed.`);
  }
});
