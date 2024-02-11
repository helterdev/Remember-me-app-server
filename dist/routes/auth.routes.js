"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const validateToken_1 = require("../middlewares/validateToken");
const validateSchema_1 = require("../middlewares/validateSchema");
const auth_schema_1 = require("../validators/auth.schema");
//creamos las rutas para authenticar
const router = (0, express_1.Router)();
//rutas
router.post('/register', (0, validateSchema_1.validateSchema)(auth_schema_1.registerSchema), auth_controller_1.register);
router.post('/login', (0, validateSchema_1.validateSchema)(auth_schema_1.loginSchema), auth_controller_1.login);
router.post('/logout', auth_controller_1.logout);
router.get('/profile', validateToken_1.authRequired, auth_controller_1.profile);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map