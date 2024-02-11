"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateToken_1 = require("../middlewares/validateToken");
const task_controller_1 = require("../controllers/task.controller");
const router = (0, express_1.Router)();
router.get('/task', validateToken_1.authRequired, task_controller_1.getTasks);
router.post('/task', validateToken_1.authRequired, task_controller_1.postTask);
router.get('/task/:id', validateToken_1.authRequired, task_controller_1.getTask);
router.put('/task/:id', validateToken_1.authRequired, task_controller_1.putTask);
router.delete('/task/:id', validateToken_1.authRequired, task_controller_1.deleteTask);
exports.default = router;
//# sourceMappingURL=task.routes.js.map