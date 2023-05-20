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
