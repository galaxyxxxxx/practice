/**
 * 节流 - 非立即执行
 */
const throttleUnimmediate = (func, delay) => {
  let flag  = true; // flag判断是否可执行
  return () => {
    let context = this
    let args = arguments
    if(flag) {
      flag = false
      setTimeout(() => {
        func.apply(context, args)
        flag = true;
      },delay)
    }
  }
}

/**
 * 节流 - 立即执行
 */
const throttleImmediate = (func, delay) => {
  let flag = true;
  return () => {
    let context = this
    let args = arguments
    if(flag) {
      fn.apply(context, args);
      flag = false
      setTimeout(() => {
        flag = true;
      },delay)
    }
  }
}

/**
 * 节流 - 合并版
 */
const throttle = (func, delay, immediate) => {
  let flag = true;
  return () => {
    let context = this
    let args = arguments
    if(flag) {
      isImmediate && func.apply(context, args)
      flag = false
      setTimeout(() => {
        !isImmediate && func.apply(context,args)
        flag = true
      },delay)
    }
  }
}