let props1: Promise<any>;
let props2: number;
let props3: Array<Promise<any>>;

//q: props2并发量，任意n个完成后，再pushn个进来继续执行

//a1: 构建taskqueue，消费区大小为props2，其中某任务完成后，再取出下一个任务进行执行
//a2: promise.any 任意一个完成后，继续加入新的promise。递归？

const limitPromise = (fun , limit: number, ...Promise) => {
  // createTaskQueue
  let active = 0; // 正在执行的数量
  const taskQueue = []

  // initTaskQueue
  let p = new Promise((resolve, reject) => {
    // 首次并发量的控制
    const task = setTask(fun,)

  })

  // 封装单个任务的处理
  const setTask = (task: Promise, resolve, reject) => {
    // TODO: 补充resolve reject; 如何重复执行。。。
    return task.then(resolve).catch(reject).finally(() => {
      // updateTaskQueue
      active--;
      if(active < limit) {
         //获取队列的下一个执行promise
        const nextPromise = taskQueue.unshift()
        //新的promise进行执行消费区
        
      }
    })
  }

}
