/**
 * 数组去重的n种方法
 * @date 2021/9/5
 */

/**
 * 方法1: 基于set
 */
Array.prototype.unique = function() {
    /**
     * Array.from(arrayLike[, mapFn[, thisArg]])
     * 从迭代式对象创建一个新的 浅拷贝的数组实例
     * 一般用于：从String / Set / Map / 类数组对象argument 生成数组
     */
    return Array.from(new Set(this)); // 此处也可以用[...new Set(this)]
};

/**
 *
 * 方法2: 基于filter
 */
Array.prototype.unique = function() {
    /**
     * Array.filter(callback(element[, index[, array]])[, thisArg])
     *
     * filter 为数组中的每个元素调用一次 callback 函数，并利用所有使得 callback 返回 true 或等价于 true 的值的元素创建一个新数组。
     * callback 只会在已经赋值的索引上被调用，对于那些已经被删除或者从未被赋值的索引不会被调用。
     * 那些没有通过 callback 测试的元素会被跳过，不会被包含在新数组中。
     */
    return this.filter((cur, index, arr) => arr.indexOf(cur, 0) === index);
};

/**
 * 方法3: 基于reduce
 */
Array.prototype.unique = function() {
    return this.reduce(
        (res, cur) => (res.includes(cur) ? res : [...res, cur]), []
    );
};

/**
 * 方法4: 基于indexOf
 */
Array.prototype.unique = function() {
    let res = [];
    for (let item of this) {
        if (res.indexOf(item) === -1) res.push(item);
    }
    return res;
};

/**
 * 方法5: 基于双重循环 + splice
 * @deprecated
 */
Array.prototype.unique = function() {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        let cur = this[i];
        for (let j = i + 1; j < this.length; j++) {
            if (this[j] === cur) {
                this.splice(j, 1); //remove the duplicate one and back forward the j
                j--;
            }
        }
    }
    return res;
};

/**
 * 方法6: 基于Sort
 * @deprecated
 */
Array.prototype.unique = function() {
    let arr = this.sort((a, b) => a - b);
    let res = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] != arr[i - 1]) res.push(arr[i]);
    }
    return res;
};