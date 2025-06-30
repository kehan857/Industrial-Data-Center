import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  // 门户网站首页
  {
    path: '/',
    name: 'Portal',
    component: () => import('@/views/Portal.vue'),
    meta: { title: '防爆产业数据中心 - 智慧产业生态平台' }
  },
  
  // 登录页
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/Login.vue'),
    meta: { title: '登录' }
  },
  
  // 主应用布局 (需要登录后访问)
  {
    path: '/app',
    name: 'Layout',
    component: () => import('@/layouts/MainLayout.vue'),
    redirect: '/app/dashboard',
    meta: { requiresAuth: true },
    children: [
      // 仪表板首页
      {
        path: '/app/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
        meta: { title: '数据概览' }
      },
      
      // V1.0 资源库模块
      {
        path: '/app/resources',
        name: 'Resources',
        redirect: '/app/resources/enterprises',
        meta: { title: '资源库' },
        children: [
          // 企业库
          {
            path: '/app/resources/enterprises',
            name: 'EnterpriseList',
            component: () => import('@/views/resources/EnterpriseList.vue'),
            meta: { title: '企业库' }
          },
          {
            path: '/app/resources/enterprises/:id',
            name: 'EnterpriseDetail',
            component: () => import('@/views/resources/EnterpriseDetail.vue'),
            meta: { title: '企业详情' }
          },
          // 需求库
          {
            path: '/app/resources/demands',
            name: 'DemandList',
            component: () => import('@/views/resources/DemandList.vue'),
            meta: { title: '需求库' }
          },
          {
            path: '/app/resources/demands/:id',
            name: 'DemandDetail',
            component: () => import('@/views/resources/DemandDetail.vue'),
            meta: { title: '需求详情' }
          },
          // 产品库
          {
            path: '/app/resources/products',
            name: 'ProductList',
            component: () => import('@/views/resources/ProductList.vue'),
            meta: { title: '产品库' }
          },
          // 解决方案库
          {
            path: '/app/resources/solutions',
            name: 'SolutionList',
            component: () => import('@/views/resources/SolutionList.vue'),
            meta: { title: '解决方案库' }
          },
          // 专家库
          {
            path: '/app/resources/experts',
            name: 'ExpertList',
            component: () => import('@/views/resources/ExpertList.vue'),
            meta: { title: '专家库' }
          }
        ]
      },
      
      // V1.1 战略洞察模块
      {
        path: '/app/insights',
        name: 'Insights',
        meta: { title: '战略洞察' },
        children: [
          // 产业链概览
          {
            path: '/app/insights/industry-overview',
            name: 'IndustryOverview',
            component: () => import('@/views/insights/IndustryOverview.vue'),
            meta: { title: '产业链概览' }
          },
          // 产业链地图
          {
            path: '/app/insights/industry-map',
            name: 'IndustryMap',
            component: () => import('@/views/insights/IndustryMap.vue'),
            meta: { title: '产业链地图' }
          },
          // 产业链图谱
          {
            path: '/app/insights/industry-chain',
            name: 'IndustryChainDefault',
            component: () => import('@/views/insights/IndustryChain.vue'),
            meta: { title: '产业链图谱' }
          },
          {
            path: '/app/insights/industry-chain/:industry',
            name: 'IndustryChain',
            component: () => import('@/views/insights/IndustryChain.vue'),
            meta: { title: '产业链图谱' }
          },
          // 企业地图
          {
            path: '/app/insights/enterprise-map',
            name: 'EnterpriseMap',
            component: () => import('@/views/insights/EnterpriseMap.vue'),
            meta: { title: '企业地图' }
          }
        ]
      },
      
      // V1.2 机会引擎模块
      {
        path: '/app/opportunities',
        name: 'Opportunities',
        meta: { title: '机会引擎' },
        children: [
          // 供需地图
          {
            path: '/app/opportunities/supply-demand-map',
            name: 'SupplyDemandMap',
            component: () => import('@/views/opportunities/SupplyDemandMap.vue'),
            meta: { title: '供需地图' }
          }
        ]
      },
      
      // 后台管理
      {
        path: '/app/admin',
        name: 'Admin',
        meta: { title: '后台管理', requiresAuth: true, requiresAdmin: true },
        children: [
          {
            path: '/app/admin/users',
            name: 'UserManagement',
            component: () => import('@/views/admin/UserManagement.vue'),
            meta: { title: '用户管理' }
          },
          {
            path: '/app/admin/roles',
            name: 'RoleManagement',
            component: () => import('@/views/admin/RoleManagement.vue'),
            meta: { title: '角色管理' }
          }
        ]
      }
    ]
  },

  // 兼容旧路由 - 重定向到新路由
  {
    path: '/dashboard',
    redirect: '/app/dashboard'
  },
  {
    path: '/resources/:pathMatch(.*)*',
    redirect: (to) => `/app/resources/${to.params.pathMatch}`
  },
  {
    path: '/insights/:pathMatch(.*)*',
    redirect: (to) => `/app/insights/${to.params.pathMatch}`
  },
  {
    path: '/opportunities/:pathMatch(.*)*',
    redirect: (to) => `/app/opportunities/${to.params.pathMatch}`
  },
  {
    path: '/admin/:pathMatch(.*)*',
    redirect: (to) => `/app/admin/${to.params.pathMatch}`
  },
  
  // 404页面
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: { title: '页面未找到' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta.title) {
    document.title = `${to.meta.title}`
  }
  
  // 权限验证逻辑
  const isAuthenticated = localStorage.getItem('token')
  
  if (to.path === '/login') {
    // 如果已登录，重定向到应用首页
    if (isAuthenticated) {
      next('/app/dashboard')
    } else {
      next()
    }
  } else if (to.meta.requiresAuth) {
    // 需要登录的页面
    if (isAuthenticated) {
      // 检查管理员权限
      if (to.meta.requiresAdmin) {
        const userRole = localStorage.getItem('userRole')
        if (userRole === 'admin') {
          next()
        } else {
          next('/app/dashboard')
        }
      } else {
        next()
      }
    } else {
      next('/login')
    }
  } else {
    // 公开页面
    next()
  }
})

export default router 