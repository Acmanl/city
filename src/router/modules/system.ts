/**
 * @constructor
 * @description 系统管理
 * @developers
*/
import Layout from '@/layout/index.vue'
export default [
  {
    path: '/System',
    name: 'System',
    component: Layout,
    meta: {
      title: '系统管理',
      icon: 'el-icon-setting',
      iconBg: '#29bf4d'
    },
    redirect: '/System/index',
    children: [
      {
        path: 'index',
        name: 'index',
        meta: {
          title: '系统管理',
          icon: 'icon-menu-icon-tongyong'
        },
        component: () => import('@/views/system/index.vue')
        // children: [
        //   {
        //     path: 'TotalWater',
        //     name: 'TheckWater',
        //     meta: {
        //       title: '用水总量'
        //       // icon: 'el-icon-setting'
        //     },
        //     component: () => import('@/views/doubleControl/doubleControlManagement/totalWater')
        //   },
        //   {
        //     path: 'WaterUseEfficiency',
        //     name: 'WaterUseEfficiency',
        //     meta: {
        //       title: '用水效率'
        //       // icon: 'el-icon-setting'
        //     },
        //     component: () => import('@/views/doubleControl/doubleControlManagement/waterUseEfficiency')
        //   }
        // ]
      }
    ]
  }
]

