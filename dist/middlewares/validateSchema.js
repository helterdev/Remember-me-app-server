"use strict";
//valida el schema que llega a la request
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = void 0;
const zod_validation_error_1 = require("zod-validation-error");
const validateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    }
    catch (err) {
        const validationsError = (0, zod_validation_error_1.fromZodError)(err);
        return res.status(400).send({
            error: validationsError.details.map((details) => details.message),
        });
    }
};
exports.validateSchema = validateSchema;
//# sourceMappingURL=validateSchema.js.map