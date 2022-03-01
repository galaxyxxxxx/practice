/**
 * 给你一个包含 n 个整数的数组 
 * 判断数组中是否存在三个元素 a ，b ，c 
 * 使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组
 */

let func = (source: Array<number>) => {
  const result = []
  source.sort((a, b) => a - b)
  let i = 0;
  // 剪枝
  while(source[i] <= 0) {

    // 去重
    if(i>0 && source[i] == source[i-1]) continue;

    // 此时source[i]是三数之一，需要找到target - source[i] = a + b 的 a 和 b 
    
    let left = i + 1
    let right = source.length - 1

    while( left < right) {
      let sum = source[left] + source[right] + source[i]
      console.log(i,left,right, sum)
      if(sum === 0) {
        result.push([source[i], source[left++], source[right--]])
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }

    i++
  }

  return result
}

let array = [-1, 0, 1, 2, -1, -4]
let rrr = func(array)

console.log(rrr)
