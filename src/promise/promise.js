// 这种方式实现了Promise对象的链式调用，但是后续then方法的代码都会立即执行
function Promise(fn) {
    // 分别保存状态，值，以及回调函数
    let state = 'pending',
        value = null,
        callbacks = [];
    // 存储回调函数
    this.then = function(onFulfilled) {
        if (state === 'pending') {
            callbacks.push(onFulfilled);
            return this;
        }
        onFulfilled(value);
        return this;
    }

    function resolve(data) {
        value = data;
        state = 'fulfilled';
        setTimeout(() => {
            callbacks.forEach(function(callback) {
                callback(data);
            })
        }, 0);
    }
    fn(resolve);
}
const promise = new Promise(function(resolve) {
    setTimeout(() => {
        let data = 1000;
        resolve(data);
    }, 1000);
});
promise.then(function(params) {
    console.log(params)
}).then(function(params) {
    setTimeout(() => {
        console.log(123);
    }, 1000);
}).then(function(params) {
    console.log(params)
})