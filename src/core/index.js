/*
 * @Author: TuYongTao
 * @Date: 2021-08-30 20:19:46
 * @LastEditors: your Name
 * @LastEditTime: 2021-09-07 19:39:26
 * @Description: 这是核心文件的入口
 */
import Vue from './instance/index'  // 这是ES6 通过 export default 导出的引入方式

import { initGlobalAPI } from './global-api/index'  // 这是通过导出相应的接口

initGlobalAPI(Vue)
