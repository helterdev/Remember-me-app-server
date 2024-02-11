"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
//creamos el esquema para guardar datos en la db
const UserSchema = new mongoose_1.Schema({
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
}, {
    timestamps: true
});
exports.UserModel = (0, mongoose_1.model)('User', UserSchema);
//# sourceMappingURL=user.model.js.map