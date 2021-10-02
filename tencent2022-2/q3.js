/**
 * 数值转化为字符串并增加千位分隔符
 * @duration: 40min
 * @cases: 80%
 */

let num = -123;

let str = num.toString();
// @tips: 考虑小数
let arrs = str.split(".");
let floatNumber;
if (arrs.length > 1) floatNumber = arrs[1];

let arr = arrs[0].split("");

if (arr.length <= 3) {
  console.log(num);
} else {
  let res = "";

  let len = str.length;
  // @tips: 考虑负数
  if (arr[0] == "-") {
    len--;
    res += "-";
    arr.shift();
  }
  let extra = len % 3;
  for (let i = 0; i < extra; i++) {
    res += arr[i];
  }
  if (extra != 0) res += ",";

  for (let i = extra; i < arr.length - 2; i += 3) {
    res += arr[i] + arr[i + 1] + arr[i + 2] + ",";
  }

  res = res.substr(0, res.length - 1);
  if (floatNumber) res += "." + floatNumber;
  console.log(res);
}
