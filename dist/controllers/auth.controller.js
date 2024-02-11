"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = exports.logout = exports.login = exports.register = void 0;
const user_model_1 = require("../db/models/user.model");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_1 = require("../libs/jwt");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).send({
                message: 'Falta un campo',
            });
        }
        //encryptamos la password
        const passwordHash = yield bcryptjs_1.default.hash(password, 10);
        const newUser = new user_model_1.UserModel({
            username,
            email,
            password: passwordHash,
        });
        const createUser = yield newUser.save();
        //creas el token despues de que el usuario sea creado
        const token = yield (0, jwt_1.createAccessToken)({ id: createUser._id });
        //lo estableces en una cookie
        res.cookie('token', token);
        return res.status(200).send({
            message: 'Usuario registrado',
            user: {
                id: createUser._id,
                username: createUser.username,
                email: createUser.email,
                createdAt: createUser.createdAt,
                updatedAt: createUser.updatedAt,
            },
        });
    }
    catch (error) {
        return res.status(500).send({
            error,
        });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({
                message: 'Falta un parametro',
            });
        }
        const userFind = yield user_model_1.UserModel.findOne({ email });
        if (!userFind) {
            return res.status(400).send('Usuario no registrado');
        }
        const isMatch = yield bcryptjs_1.default.compare(password, userFind.password);
        if (!isMatch) {
            return res.status(400).send('Invalid Password');
        }
        //creacion del token
        const token = yield (0, jwt_1.createAccessToken)({ id: userFind.id });
        res.cookie('token', token);
        return res.send({
            id: userFind.id,
            username: userFind.username,
            email: userFind.email,
        });
    }
    catch (error) {
        return res.status(500).send({
            message: error,
        });
    }
});
exports.login = login;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.cookie('token', '', {
        expires: new Date(0),
    });
    return res.sendStatus(200);
});
exports.logout = logout;
const profile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    const userFound = yield user_model_1.UserModel.findById(id);
    if (!userFound) {
        return res.status(400).send({
            message: 'User not found',
        });
    }
    return res.send({
        id: userFound.id,
        userName: userFound.username,
        email: userFound.email,
    });
    // return res.sendStatus(200);
});
exports.profile = profile;
//# sourceMappingURL=auth.controller.js.map