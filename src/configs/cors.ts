import "dotenv/config";

export const corsConfig = {
  origin: process.env.APP_URL,
  credentials: true,
};
