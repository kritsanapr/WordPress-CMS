import express from "express";

const router = express.Router();

import { signup, signin } from "../controllers/auth.js";

router.get("/", (req, res) => {
  return res.json({
    data: "hello world from auth API",
  });
});

router.post("/signup", signup);
router.post("/signin", signin);
// router.post("/forgot-password");
// router.post("/reset-password");

export default router;
