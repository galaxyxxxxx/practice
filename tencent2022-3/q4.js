/**
 * 子串匹配 统计出现次数
 * 方法：正则表达式
 * 通过率：57.14
 */

const ooo = 'You say that you love rain,but you open your umbrella when it rains:rain'

let input = ooo.split(':')
let str = input[0]
let pattern = input[1]

let reg = new RegExp(pattern,'g')
let res = str.match(reg).length

let input = readline().split(':')
let str = input[0] || ''
let pattern = input[1] || ''



const countSubstrings = (str, searchValue) => {
  let count = 0,
    i = 0;
  while (true) {
    const r = str.indexOf(searchValue, i);
    if (r !== -1) [count, i] = [count + 1, r + 1];
    else return count;
  }
};



if(pattern == '' || str == ''){
    print(0)
}else{
    let res = countSubstrings(str, pattern)
    print(res)
}