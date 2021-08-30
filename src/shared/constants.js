/*
 * @Author: TuYongTao
 * @Date: 2021-08-30 20:01:15
 * @LastEditors: your Name
 * @LastEditTime: 2021-08-30 20:12:16
 * @Description: 当有常量被用于多个模块时，可以单独创建 constants.js 文件
 */

export const ASSET_TYPES = [
  'component',
  'directive',
  'filter'
]

export const LIFECYCLE_HOOKS = [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated',
    'errorCaptured',
    'serverPrefetch'
  ]
