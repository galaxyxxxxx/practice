const bubble1 = (arr) => {

  console.time('bubble1')
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j + 1] = tmp
      }
    }
  }
  console.timeEnd('bubble1')
  return arr
}

/**
 * 改进版
 * 记录每趟排序中 最后一次交换的位置pos
 * 避免尾部已排好序的数组浪费时间
 * @param {*} arr 
 */
const bubble2 = (arr) => {
  console.time('bubble2')
  let len = arr.length;
  let i = len - 1;
  while(i > 0) {
    let pos = 0
    for (let j = 0; j < i; j++) {
      if(arr[j] > arr[j + 1]) {
        pos = j // 记录每次交换的位置
        let tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j + 1] = tmp
      }
    }
    i = pos
  }
  console.timeEnd('bubble2')
  return arr
}

/**
 * 改进版
 * 
 * 最佳情况：T(n) = O(n) 已排序
 * 最坏情况：T(n) = O(n2) 反向排序
 * 平均情况：T(n) = O(n2)
 * 
 * 每趟排序 变为正向冒泡+反向冒泡
 */
const bubble3 = (arr) => {
  console.time('bubble3')
  let left = 0
  let right = arr.length - 1
  let i,tmp
  while (left < right) {
    for(i = left; i < right; i++) {
      if(arr[i] > arr[i + 1]) {
        tmp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = tmp
      }
    }
    right--;
    for(i = right; i > left; i--) {
      if(arr[i-1] > arr[i]) {
        tmp = arr[i]
        arr[i] = arr[i - 1]
        arr[i - 1] = tmp
      }
    }
    left++;
  }
  console.timeEnd('bubble3')
  return arr
}

let arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubble1([...arr]));
console.log(bubble2([...arr]));
console.log(bubble3([...arr]));