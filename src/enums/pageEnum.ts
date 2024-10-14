/**
 * 基础页面路由
 */
export enum BasicPageEnum {
  // 登录
  LOGIN = '/auth/login',
  // 首页
  HOME = '/dashboard',
  // 刷新路由
  REFRESH = '/refresh',
  // 入口路由
  ENTRY = '/entry',
  // 重定向路由
  REDIRECT = '/redirect'
}

/**
 * 错误页面路由
 */
export enum ExceptionPageEnum {
  // 404 未找到页面
  EXCEPTION_404 = '/404',
  // 403 未授权
  EXCEPTION_403 = '/403'
}
