/**
 * 数组合并&去重
 * @duration: 1min
 * @cases: 100%
 */
let arr1 = [1, 2, 3, 4];

let arr2 = [3, 2, 1, 0];

let res = arr1.concat(arr2).sort((a, b) => a - b);

console.log(Array.from(new Set(res)));
