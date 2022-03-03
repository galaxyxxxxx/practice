/**
 * 插入排序
 * 
 * 最佳情况：T(n) = O(n) 已排序
 * 最坏情况：T(n) = O(n2) 反向排序
 * 平均情况：T(n) = O(n2)
 */
const insertion = (arr) => {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let key = arr[i];

    let j = i - 1;
    while(j >= 0 && arr[j] > key) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = key;
  }
  return arr;
}