import express from "express";
import dotenv from "dotenv";
import auth from "./routes/authRoute.js";
import mongoose from "mongoose";

dotenv.config();

const PORT = 9000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1/auth", auth);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server is running on port ${PORT} ...`)
    );
  })
  .catch((err) => console.log(err));
