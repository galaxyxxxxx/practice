/**
 * 选择排序
 * 
 * 最佳情况：T(n) = O(n2)
 * 最差情况：T(n) = O(n2)
 * 平均情况：T(n) = O(n2)
 * 
 * @param {*} arr 
 * @returns 
 */

export const selection = (arr) => {
  console.time('select');
  let len = arr.length;
  let minIndex,tmp
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    tmp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = tmp
  }

  console.timeEnd('select');
  return arr
}

let arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(selection(arr))