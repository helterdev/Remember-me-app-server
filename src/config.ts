import dotenv from "dotenv";

dotenv.config();

const accessenv = {
  PORT: process.env.PORT!,
  NODE_ENV: process.env.NODE_ENV!,
  JWT_SECRET: process.env.JWT_SECRET!,
  CLIENT_URL: process.env.CLIENT_URL!,
  COOKIE_DOMAIN: process.env.COOKIE_DOMAIN!,
  COOKIE_SECURE: process.env.COOKIE_SECURE!,
  COOKIE_HTTP_ONLY: process.env.COOKIE_HTTP_ONLY!,
  COOKIE_SAME_SITE: process.env.COOKIE_SAME_SITE!,
  MONGODB_URL_DATABASE: process.env.MONGODB_URL_DATABASE!,
};

export default accessenv;
