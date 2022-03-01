/**
 * 防抖 - 非立即执行
 */

const debounceUnimmediate = (func, delay) => {
  let timerId = null;

  return () => {
    let context = this;
    let args = arguments;

    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(context, args);
    },delay)
  }
}

/**
 * 防抖 - 立即执行
 */

const debounceImmediate = (func, delay) => {
  let timerId = null;
  let flag = true

  return () => {
    let context = this;
    let args = arguments;
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(context, args);
      flag = false;
    }, delay)
  }
}

/**
 * 防抖 - 合并版
 */
const debounce = (func, delay, immediate) => {

  let timerId = null;
  let flag = true;

  return () => {
    let context = this;
    let args = arguments;

    clearTimeout(timerId);

    if (immediate) {
      if (flag) {
        fn.apply(context, args);
        flag = false
      }
      timerId = setTimeout(() => {
        flag = false
      },delay)
    } else {
      timerId = setTimeout(() => {
        func.apply(context, args);
      },delay)
    }
  }

}