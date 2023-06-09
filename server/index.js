import express from "express";
import http from "http";
import { config as dotenvConfig } from "dotenv";
import { PORT } from "./config.js";
import authRouter from "./routes/auth.js";
import mongoose from "mongoose";
import { DATABASE_URL } from "./config.js";
import cors from "cors";
import morgan from "morgan";

dotenvConfig();
const app = express();

mongoose.set("strictQuery", false);
mongoose
  .connect(DATABASE_URL)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR: ", err));

app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  return res.json({
    data: "hello world from server",
  });
});

app.use("/api/auth", authRouter);

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
