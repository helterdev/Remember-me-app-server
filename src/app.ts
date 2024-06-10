import express from "express";
import morgan from "morgan";
import cors from "cors";
import authRouter from "./routes/auth.routes";
import cookieParser from "cookie-parser";
import taskRouter from "./routes/task.routes";

const app: express.Application = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.options("/api", cors());
app.options("/api/auth", cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRouter);
app.use("/api/auth", taskRouter);
export default app;
