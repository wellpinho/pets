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
});
