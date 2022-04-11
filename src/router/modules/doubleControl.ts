/**
 * @constructor
 * @description 双控管理
 * @developers
*/
import Layout from '@/layout/index.vue'
export default [
  {
    path: '/DoubleControl',
    name: 'DoubleControl',
    component: Layout,
    meta: {
      title: '双控管理',
      icon: 'el-icon-setting',
      iconBg: '#29bf4d'
    },
    redirect: '/DoubleControl/DoubleControlManagement/TotalWater',
    children: [
      {
        path: 'DoubleControlManagement',
        name: 'DoubleControlManagement',
        meta: {
          title: '双控管理',
          icon: 'icon-menu-icon-tongyong'
        },
        component: () => import('@/views/doubleControl/index.vue'),
        children: [
          {
            path: 'TotalWater',
            name: 'TotalWater',
            meta: {
              title: '用水总量'
              // icon: 'el-icon-setting'
            },
            component: () => import('@/views/doubleControl/doubleControlManagement/totalWater.vue')
          },
          {
            path: 'WaterUseEfficiency',
            name: 'WaterUseEfficiency',
            meta: {
              title: '用水效率'
              // icon: 'el-icon-setting'
            },
            component: () => import('@/views/doubleControl/doubleControlManagement/waterUseEfficiency.vue')
          }
        ]
      }
    ]
  }
]

