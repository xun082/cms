// import { ResponseLoginInfo } from "@/pages/login/interface";

// 用户 Token 的本地缓存键名
export const TOKEN_KEY = "token";
export const THEME_KEY = "theme";
export const PERMISSIONS_KEY = "permissions";
/**
 * 将 Token 信息存入缓存
 * @param {Object} tokenInfo 从后端获取到的 Token 信息
 */
export const setLocalStorage = (key: string, tokenInfo: any) => {
  localStorage.setItem(key, JSON.stringify(tokenInfo));
};

export const setThemeInfo = (type: "dark" | "light") => {
  localStorage.setItem(THEME_KEY, JSON.stringify(type));
};

export const getLocalStorageInfo = (key: string) => {
  return JSON.parse(localStorage.getItem(key)!) || {};
};

export const getThemeInfo = () => {
  return JSON.parse(localStorage.getItem(THEME_KEY)!) || "light";
};

/**
 * 删除本地缓存中的 Token 信息
 */
export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

/**
 * 判断本地缓存中是否存在 Token 信息
 */
export const hasToken = () => {
  return !!getLocalStorageInfo(TOKEN_KEY).assess_token;
};
