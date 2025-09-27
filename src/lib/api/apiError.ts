export class ApiError<TDetails = unknown> extends Error {
  readonly status: number;
  readonly details?: TDetails;

  constructor(message: string, status: number, details?: TDetails) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details;
  }
}
