import request from "supertest";
import { app } from "@/app";
import { prisma } from "@/database/prisma";

describe("SessionsController", () => {
  let user_id: string;

  afterAll(async () => {
    await prisma.user.delete({ where: { id: user_id } });
  });

  it("should authenticate a and get access token", async () => {
    const response = await request(app).post("/users").send({
      name: "Auth Test User",
      email: "auth_test_user@example.com",
      password: "password123",
    });

    user_id = response.body.id;

    const sessionsResponse = await request(app).post("/sessions").send({
      email: "auth_test_user@example.com",
      password: "password123",
    });

    expect(sessionsResponse.status).toBe(200);
    expect(sessionsResponse.body.token).toEqual(expect.any(String));
  });
});
