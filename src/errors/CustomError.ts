class CustomError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, stautusCode = 400) {
    this.message = message;
    this.statusCode = stautusCode;
  }
}

export { CustomError };
