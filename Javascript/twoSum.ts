/**
 * 给定一个整数数组 nums 和一个目标值 target
 * 请你在该数组中找出和为目标值的那 两个 整数
 * 并返回他们的数组下标
 */

const source = [1,2,3,4,5,6,7]
const fn = (source: number[], target: number) => {
  const map: Record<number,number> = {};
  for( let i = 0; i < source.length; i++ ) {
    const num = source[i]
    const key = target - num
    if(map[key]) {
      return [i, map[key]].sort((a, b) => a - b)
    }
    map[num] = i
  }
  return []
}

const rr = fn(source, 8)
console.log(rr)
