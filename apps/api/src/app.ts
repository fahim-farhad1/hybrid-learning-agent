
import express from "express";
import healthRoutes from "./routes/health.routes.js";
import taskRoutes from "./routes/task.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());

app.use("/health", healthRoutes);
app.use("/api/v1/tasks", taskRoutes);
app.use(errorHandler);
export default app;
