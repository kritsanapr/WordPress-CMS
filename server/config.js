import { config as dotenvConfig } from "dotenv";
dotenvConfig();

export const DATABASE_URL = process.env.DATABASE_URL;
export const JWT_SECRET = process.env.JWT_SECRET;
export const SENDGRID_KEY = process.env.SENDGRID_KEY;
export const EMAIL_FROM = process.env.EMAIL_FROM;
export const PORT = process.env.PORT || 8000;
