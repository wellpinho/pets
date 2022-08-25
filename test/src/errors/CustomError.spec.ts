import { CustomError } from "../../../src/errors/CustomError";

describe("# CustomError", () => {
  it("should receive error", () => {
    const error = new CustomError("Error", 404);

    expect(error.message).toBe("Error");
    expect(error.statusCode).toBe(404);
  });
});
