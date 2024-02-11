"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const task_routes_1 = __importDefault(require("./routes/task.routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// console.log(process.env.PORT);
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
    origin: 'http://localhost:3000',
}));
app.options('/api', (0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use('/api', auth_routes_1.default);
app.use('/api/auth', task_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map