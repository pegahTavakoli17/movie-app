import { env } from "./env";
const BASE_URL = env.RICKMORTY_API_URL;
export async function apiClient<T>(
  path: string,
  init: RequestInit,
): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, init);
  return res.json() as Promise<T>;
}
