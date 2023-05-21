import type { InternalAxiosRequestConfig } from "axios";

import { RequestConfig } from "./types";
import { HttpEnum } from "@/enum/http";
import { routerEnum } from "@/enum/router";
import { TOKEN_KEY, getLocalStorageInfo } from "../storage";
import { isString } from "@/utils/is";

export function OptimizedData(config: RequestConfig) {
  const { data, method } = config;

  if (method === "get" || method === "delete") {
    const t = {
      _t: new Date().getTime(),
    };
    if (!isString(data)) {
      config.params = Object.assign(data || {}, t);
      config.data = undefined;
    } else {
      config.url = config.url + data + `?_t=${t._t}`;
      config.params = undefined;
    }
  } else {
    const params = filterNullParams(data || []);
    if (!isString(params)) {
      config.data = params;
      config.params = undefined;
    } else {
      config.url = config.url + params;
      config.params = undefined;
    }
  }
  return config;
}

export function RequestBefore(req: InternalAxiosRequestConfig) {
  const { assess_token } = getLocalStorageInfo(TOKEN_KEY);

  if (assess_token) {
    req.headers.Authorization = assess_token;
  }

  return req;
}

export function ResponseSuccess(res: any) {
  const { code, data } = res.data;

  if (code === HttpEnum.SUCCESS) {
    return data;
  }

  if (code === HttpEnum.OVERDUE) {
    // uesErrorMsg("登陆超时,请重新登录!");
    window.location.hash = routerEnum.LOGIN_ROUTER;
    return data;
  }

  if (code === HttpEnum.TIMEOUT) {
    // uesErrorMsg("接口请求超时,请刷新页面重试!");
    return "error";
  }

  return Promise.reject(res.data);
}

export function ResponseFailure(e: any) {
  const { code, message } = e || {};
  const err: string = e?.toString?.() ?? "";
  try {
    if (code === HttpEnum.TIMEOUT && message.indexOf("timeout") !== -1) {
      //   uesErrorMsg("请求超时");
      throw new Error("请求超时");
    }
    if (err?.includes("Network Error")) {
      //   uesErrorMsg("网络异常");
    }
  } catch (error: any) {
    throw new Error(error);
  }
  return e;
}

const filterNullParams = (params: any) => {
  Object.keys(params).filter(
    key =>
      (params[key] === "" ||
        params[key] === undefined ||
        params[key] === null) &&
      delete params[key],
  );

  return params;
};
