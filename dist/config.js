"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const accessenv = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    JWT_SECRET: process.env.JWT_SECRET,
    CLIENT_URL: process.env.CLIENT_URL,
    COOKIE_DOMAIN: process.env.COOKIE_DOMAIN,
    COOKIE_SECURE: process.env.COOKIE_SECURE,
    COOKIE_HTTP_ONLY: process.env.COOKIE_HTTP_ONLY,
    COOKIE_SAME_SITE: process.env.COOKIE_SAME_SITE,
    MONGODB_URL_DATABASE: process.env.MONGODB_URL_DATABASE,
};
exports.default = accessenv;
//# sourceMappingURL=config.js.map