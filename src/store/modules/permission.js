// import { asyncRouterMap, constantRouterMap } from '@/router'

// /**
//  * 通过resurl判断是否与当前用户权限匹配
//  * @param menus
//  * @param route
//  */
// function hasPermission(menus, route) {
//   if (route.meta && route.meta.title) {
//     return menus.some(menu => {
//       return menu.resurl === route.meta.title || menu.url === route.meta.title
//     })
//   } else {
//     return true
//   }
// }

// /**
//  * 递归过滤异步路由表，返回符合用户角色权限的路由表
//  * @param asyncRouterMap
//  * @param roles
//  */
// function filterAsyncRouter(asyncRouterMap, menus) {
//   const accessedRouters = asyncRouterMap.filter(route => {
//     if (hasPermission(menus, route)) {
//       if (route.children && route.children.length) {
//         route.children = filterAsyncRouter(route.children, menus)
//       }
//       return true
//     }
//     return false
//   })
//   return accessedRouters
// }

// const permission = {
//   state: {
//     routers: constantRouterMap,
//     addRouters: []
//   },
//   mutations: {
//     SET_ROUTERS: (state, routers) => {
//       state.addRouters = routers
//       state.routers = constantRouterMap.concat(routers)
//     }
//   },
//   actions: {
//     GenerateRoutes({ commit }, data) {
//       return new Promise(resolve => {
//         const { menus } = data
//         const accessedRouters = filterAsyncRouter(asyncRouterMap, menus)
//         commit('SET_ROUTERS', accessedRouters)
//         resolve()
//       })
//     }
//   }
// }

// export default permission
