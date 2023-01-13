import express from "express";
import dotenv from "dotenv";
import auth from "./routes/authRoute.js";
import errorHandler from "./middlewares/errorMiddleware.js";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1/auth", auth);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on posrt ${PORT} ...`));
