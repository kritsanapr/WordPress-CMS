import express from "express";
import http from "http";
import { config as dotenvConfig } from "dotenv";
import { PORT } from "./config.js";
import authRouter from "./routes/auth.js";

dotenvConfig();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
