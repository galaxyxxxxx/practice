/**
 * 希尔排序
 * 实质上是简单插入排序的改进版，优先比较距离较远的元素，因此又叫缩小增量排序
 * 是第一个突破O(n2)的排序算法
 * @param {*} arr 
 */

// import { selection } from "./selection"
const shell = (arr) => {
  let len = arr.length
  let k = 2
  let gap = Math.floor(len / k)
  while(gap >= 1) {
    for(let i = 0; i < len; i++) {
      for(let j = i; j >= gap; j -= gap) {
        if(arr[j] < arr[j - gap]) {
          let tmp = arr[j]
          arr[j] = arr[j - gap]
          arr[j-gap] = tmp
        }
      }
    }
    gap = Math.floor(gap/k)
  }
  return arr
}

let arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(shell(arr))
