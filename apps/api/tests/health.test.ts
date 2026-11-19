
import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../src/app.js";

describe("GET /health", () => {
  it("should return API health status", async () => {
    const response = await request(app)
      .get("/health")
      .expect(200);

    expect(response.body.success).toBe(true);

    expect(response.body.message).toBe(
      "Hybrid Learning Agent API is running",
    );

    expect(response.body.data.status).toBe("healthy");

    expect(response.body.data.timestamp).toBeDefined();
  });
});
