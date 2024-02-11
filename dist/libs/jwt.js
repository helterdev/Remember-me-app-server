"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
//creamos una funcion que genera los tokens
const createAccessToken = (payload) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.sign(payload, config_1.SECRET_TOKEN, {
            expiresIn: '1d'
        }, (err, token) => {
            if (err) {
                return reject(err);
            }
            return resolve(token);
        });
    });
};
exports.createAccessToken = createAccessToken;
//# sourceMappingURL=jwt.js.map