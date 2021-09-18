/*
 * @Author: TuYongTao
 * @Date: 2021-08-30 20:01:15
 * @LastEditors: your Name
 * @LastEditTime: 2021-09-14 20:25:55
 * @Description: 
 */

export const emptyObject = Object.freeze({});

const _toString = Object.prototype.toString;
/**
 * @description: 
 * @param {*} params
 * @return {*}
 * @author: TuYongTao
 */
export function isArray(params) {
  return Array.isArray(params) || params instanceof Array || _toString.call(params) === '[object Array]'
}
// 广义的对象
export function isPlainObject(params) {
  return params !== null && typeof params === 'object'
}
// 狭义的对象
export function isObject(params) {
  return params !== null && _toString.call(params) === '[object Object]'
}

export default function isString(params) {
  return typeof params === 'string'
}

export default function isNumber(params) {
  return typeof params === 'number'
}

export function isUndef (params) {
  return params === undefined || params === null
}
export function isDef (params) {
  return params !== undefined && params !== null
}

export function toNumber(params) {
  return +params
}