/**
 * 数组扁平化 去重 排序
 */

const flatAndSortedArray = (sourceArray: any[]) => {
  return Array.from(new Set(sourceArray.flat(Infinity))).sort((a, b) => a - b)
}

const arr = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
  10,
];

const res = flatAndSortedArray(arr);
console.log(res);