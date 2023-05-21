import Request from "./request";
import { CreateOptions } from "./types";

const BASE_URL: string =
  process.env.NODE_ENV === "development"
    ? "https://mock.mengxuegu.com/mock/644b902caf3bc37f99a23656/api/"
    : "https://mock.mengxuegu.com/mock/644b902caf3bc37f99a23656/api/";
const TIME_OUT = 5000;

function createAxios(options?: CreateOptions) {
  return new Request({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    headers: { "Content-Type": "application/json;charset=UTF-8" },
    ...options,
  });
}

const instance = createAxios();

export default instance;
