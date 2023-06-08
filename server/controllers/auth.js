import { hashPassword, comparePa } from "../helpers/auth";
import jwt from "jsonwebtoken";
import nanoid from "nanoid";
import User from "../models/user";

// sendgrid
import { config as dotenvConfig } from "dotenv";
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_KEY);

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }

    if (!email) {
      return res.json({
        error: "Email is required",
      });
    }

    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be 6 characters long",
      });
    }

    const checkUser = await User().findOne({ email });
    if (checkUser) {
      return res.json({
        error: "Email is taken",
      });
    }

    const hashPassword = await hashPassword(password);

    try {
      const user = await new User({
        name,
        email,
        password: hashPassword,
      }).save();

      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      const { password, ...rest } = user._doc;

      return res.json({
        token,
        user: rest,
      });
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};

export const signin = async (req, res) => {};
