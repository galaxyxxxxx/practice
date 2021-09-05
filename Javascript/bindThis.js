/**
 * 修改this指向
 * @date 2021/9/5
 */

function bindThisByCall(f, oTarget) {
  return function () {
    f.call(oTarget, ...arguments);
  };
}

function bindThisByApply(f, oTarget) {
  return function () {
    f.apply(oTarget, arguments);
  };
}

function bindThisByBind(f, oTarget) {
  return f.bind(oTarget);
}
