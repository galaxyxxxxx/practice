/**
 * 基于promise实现一个callback
 * @date 2021/9/2
 */

let add = (a, b) => a + b;

let cb = (...args) => console.log({ ...args });

// core
let resolveCallbackFunction = function (add, cb, ...args) {
  const p = new Promise((resolve) => {
    resolve(add(...args));
  });
  p.then((res) => cb(res));

  return p;
};

resolveCallbackFunction(add, cb, 1, 2);

add(1, 2, cb);
