export const emptyObject = Object.freeze({});


/**
 * @description: %check 是Flow中的谓词函数
 * @param {*} v
 * @return {*}
 */
export function isUndef(v: any): boolean %checks {
  return v === undefined || v === null;
}
