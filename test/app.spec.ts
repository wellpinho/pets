import supertest from "supertest";
import { app } from "../src/app";

describe("## App.ts", () => {
  it("-- home respond with status 200", async () => {
    await supertest(app)
      .get("/")
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });

  it("-- home responde with error 404 if dont have path", async () => {
    await supertest(app)
      .get("/error")
      .then((res) => {
        expect(res.status).toBe(404);
      });
  });
});
