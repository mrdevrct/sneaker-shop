export interface Meta {
  has_error: boolean;
  message: string | null;
  status: number;
  pagination?: {
    total: number;
    totalPage: number;
    currentPage: number;
    nextPage: number | null;
    prevPage: number | null;
  };
}

export interface ApiResponse<T = unknown, A = unknown> {
  data: T | null;
  meta: Meta;
  attributes?: A;
}

export function isError<T>(res: ApiResponse<T>): boolean {
  return res.meta.has_error;
}


