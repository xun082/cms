import { RouteObject } from "@/router/interface";

/**
 * @author moment
 * @param theme 当前主题
 * @param light 高亮主题颜色
 * @param dark 暗黑主题颜色
 * @returns {string} 返回特定颜色
 */
export function getThemeColor(
  theme: string,
  light: string,
  dart: string,
): string {
  return theme === "light" ? light : dart;
}

/**
 * @description 递归查询对应的路由
 * @param {String} path 当前访问地址
 * @param {Array} routes 路由列表
 * @returns array
 */
export const searchRoute = (
  path: string,
  routes: RouteObject[] = [],
): RouteObject => {
  let result: RouteObject = {};
  for (let item of routes) {
    if (item.path === path) return item;
    if (item.children) {
      const res = searchRoute(path, item.children);
      if (Object.keys(res).length) result = res;
    }
  }
  return result;
};
