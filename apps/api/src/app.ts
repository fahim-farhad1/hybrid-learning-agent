
import express from "express";
import healthRoutes from "./routes/health.routes.js";
import taskRoutes from "./routes/task.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";
import userRoutes from "./routes/user.routes.js";
import learningGoalRoutes from "./routes/learning-goal.routes.js";
import learningPhaseRoutes from "./routes/learning-phase.routes.js";
const app = express();


app.use(express.json());

app.use("/health", healthRoutes);
app.use("/api/v1/tasks", taskRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/learning-goals", learningGoalRoutes);

app.use(
  "/api/v1/learning-goals/:goalId/phases",
  learningPhaseRoutes,
);

app.use(errorHandler);

export default app;

