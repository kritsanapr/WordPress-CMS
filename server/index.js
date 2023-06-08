import express from "express";
import http from "http";
import { config as dotenvConfig } from "dotenv";
import { PORT } from "./config.js";

dotenvConfig();
const app = express();

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
