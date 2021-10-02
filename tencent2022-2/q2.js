/**
 * 无重复数字升序的单链表
 * @language: Node 12.18.2
 * @duration: 10min
 * @cases: 87.5%
 */

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * @param a ListNode类一维数组 所有的无序单链表
 * @return ListNode类
 */
function solve(a) {
  // write code here
  let arr = [];
  for (let item of a) {
    while (item) {
      arr.push(item.val);
      item = item.next;
    }
  }
  let resArr = Array.from(new Set(arr)).sort((a, b) => a - b);

  let res = new ListNode();
  let p = res;
  for (let i = 0; i < resArr.length; i++) {
    p.val = resArr[i];
    if (i < resArr.length - 1) {
      let newNode = new ListNode();
      p.next = newNode;
      p = p.next;
    }
  }
  return res;
}
module.exports = {
  solve: solve,
};
