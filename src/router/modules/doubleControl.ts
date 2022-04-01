// /**
//  * @constructor
//  * @description 双控管理
//  * @developers
// */
// import Layout from '@/layout'
// import LayoutChild from '@/layout/layoutChild'
// export default [
//   {
//     path: '/DoubleControl',
//     name: 'DoubleControl',
//     component: Layout,
//     meta: {
//       title: '双控管理',
//       icon: 'el-icon-setting',
//       iconBg: '#29bf4d'
//     },
//     redirect: '/DoubleControl/DoubleControlManagement/TotalWater',
//     children: [
//       {
//         path: 'DoubleControlManagement',
//         name: 'DoubleControlManagement',
//         meta: {
//           title: '双控管理',
//           icon: 'icon-menu-icon-tongyong'
//         },
//         component: LayoutChild,
//         children: [
//           {
//             path: 'TotalWater',
//             name: 'TheckWater',
//             meta: {
//               title: '用水总量'
//               // icon: 'el-icon-setting'
//             },
//             component: () => import('@/views/doubleControl/doubleControlManagement/totalWater')
//           },
//           {
//             path: 'WaterUseEfficiency',
//             name: 'WaterUseEfficiency',
//             meta: {
//               title: '用水效率'
//               // icon: 'el-icon-setting'
//             },
//             component: () => import('@/views/doubleControl/doubleControlManagement/waterUseEfficiency')
//           }
//         ]
//       },
//       {
//         path: 'TotalWaterConsumption',
//         name: 'TotalWaterConsumption',
//         meta: {
//           title: '用水统计',
//           icon: 'icon-menu-icon-tongyong'
//         },
//         component: LayoutChild,
//         children: [
//           {
//             path: 'TotalWater',
//             name: 'TheckWater',
//             meta: {
//               title: '区域用水量'
//               // icon: 'el-icon-setting'
//             },
//             component: () => import('@/views/doubleControl/totalWaterConsumption/regionalWater')
//           },
//           {
//             path: 'WaterUseEfficiency',
//             name: 'WaterUseEfficiency',
//             meta: {
//               title: '行业用水量'
//               // icon: 'el-icon-setting'
//             },
//             component: () => import('@/views/doubleControl/totalWaterConsumption/industryWater')
//           },
//           {
//             path: 'ParkWater',
//             name: 'ParkWater',
//             meta: {
//               title: '园区用水量'
//               // icon: 'el-icon-setting'
//             },
//             component: () => import('@/views/doubleControl/totalWaterConsumption/parkWater/index')
//           },
//           {
//             path: 'UnitWater',
//             name: 'UnitWater',
//             meta: {
//               title: '单位用水统计'
//               // icon: 'el-icon-setting'
//             },
//             component: () => import('@/views/doubleControl/totalWaterConsumption/unitWater/index')
//           },
//           {
//             path: 'WaterAnalysis',
//             name: 'WaterAnalysis',
//             meta: {
//               title: '水厂水量分析'
//               // icon: 'el-icon-setting'
//             },
//             component: () => import('@/views/doubleControl/totalWaterConsumption/waterAnalysis/index')
//           }
//         ]
//       }
//     ]
//   }
// ]

