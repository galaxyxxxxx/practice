/**
 *   获取 url 中的参数
  1. 指定参数名称，返回该参数的值 或者 空字符串
  2. 不指定参数名称，返回全部的参数对象 或者 {}
  3. 如果存在多个同名参数，则返回数组
  4. 不支持URLSearchParams方法
 * @date 2021/9/5
 * @param {string} url 
 * @param {string} key 
 */

function getUrlParams(url, key) {
  if (key == "") return "";

  let paramArr = url.split("?")[1].split("#")[0].split("&");

  let res = new Map();
  paramArr.map((cur) => {
    let [k, v] = cur.split("=");
    if (res.has(k)) res.set(k, [...res.get(k), v]);
    else res.set(k, v);
  });

  return key == undefined ? res : res.get(key) || "";
}
