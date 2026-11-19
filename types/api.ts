export type PageInfo = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};
export type Paginated<T> = {
  results: T[];
  info: PageInfo;
};

export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}