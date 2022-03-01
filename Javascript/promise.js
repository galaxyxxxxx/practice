class Promise {
  // 状态
  status = 'pending'; // resolved / rejected

  // 状态转换时携带的值
  // 之所以放在全局，是因为then方法中需要处理promise状态转换后的成功/失败的值
  data = '';

  // executor: 可执行函数
  constructor(executor) {
    function resolve(value) {
      this.status = 'resolved';
      this.data = value;
    }

    function reject(reason) {
      this.status = 'rejected';
      this.data = reason;
    }

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  /**
   * 拥有一个then方法
   * @param {*} onResolved 状态为resolved时的回调函数
   * @param {*} onRejected 状态为rejected时的回调函数
   * @return Promise 返回一个新的promise
   * 
   * tips: then方法执行时，promise可能处于pending（因为executor中可能存在异步操作）
   */
  then(onResolved, onRejected) {
    onResolved =
      typeof onResolved === 'function'
        ? onResolved
        : function (v) {
            return v;
          };
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : function (e) {
            return e;
          };

    let promise2;

    promise2 = new Promise((resolve, reject) => {
      if (this.status === 'resolved') {
        try {
          // 如果有返回值 则把返回值定义为x
          const x = onResolved(this.data);
          // 执行[[Resolved]](promise2, x)
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      }

      if (this.status === 'rejected') {
        try {
          const x = onRejected(this.data);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      }
    });
  }
}
