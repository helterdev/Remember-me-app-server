"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerSchema = void 0;
const zod_1 = require("zod");
//validaciones para register
exports.registerSchema = zod_1.z.object({
    username: zod_1.z.string({
        required_error: 'Username is required',
    }),
    email: zod_1.z
        .string({
        required_error: 'Email is required',
    })
        .email({
        message: 'Invalid email',
    }),
    password: zod_1.z
        .string({
        required_error: 'Password is required',
    })
        .min(8, {
        message: 'Password must be at least 8 characters',
    }),
});
exports.loginSchema = zod_1.z.object({
    email: zod_1.z
        .string({
        required_error: 'Email is required',
    })
        .email({
        message: 'Invalid email',
    }),
    password: zod_1.z
        .string({
        required_error: 'Password is required',
    })
        .min(8, {
        message: 'Password must be at least 8 characters',
    }),
});
//# sourceMappingURL=auth.schema.js.map