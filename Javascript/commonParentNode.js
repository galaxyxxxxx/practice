/**
 * 查找两个节点的最近的一个共同父节点，可以包括节点自身
 * @date 2021/9/5
 * @param {*} oNode1
 * @param {*} oNode2
 */

function commonParentNode(oNode1, oNode2) {
  while (true) {
    if (oNode1.contains(oNode2)) {
      return oNode1;
    } else {
      oNode1 = oNode1.parentNode;
    }
  }
}
