import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    // 路由权限
    roles?: string[];
    // 是否需要登录
    requiresAuth: boolean;
    // 图标
    icon?: string;
    // 标题
    title?: string;
    // 是否在菜单栏隐藏
    hideInMenu?: boolean;
    // 子路由是否隐藏
    hideChildrenInMenu?: boolean; 
    // 是否忽略缓存
    ignoreCache?: boolean; 
  }
}
