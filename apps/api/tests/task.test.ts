
import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../src/app.js";

describe("POST /api/v1/tasks", () => {
  it("should accept valid task data", async () => {
    const response = await request(app)
      .post("/api/v1/tasks")
      .send({
        title: "Learn Express.js",
        priority: "HIGH",
        estimatedMinutes: 60,
      })
      .expect(201);

    expect(response.body.success).toBe(true);
    expect(response.body.data.title).toBe("Learn Express.js");
  });

  it("should reject empty task title", async () => {
    const response = await request(app)
      .post("/api/v1/tasks")
      .send({
        title: "",
      })
      .expect(400);

    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe("Validation failed");
  });
});
