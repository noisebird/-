function Promise(fn) {
    // 分别保存状态，值，以及回调函数
    var state = 'pending',
        value = null,
        callbacks = [];
    // 存储回调函数
    this.then = function(onFulfilled) {
        return new Promise(function(resolve) {
            handle({
                onFulfilled: onFulfilled || null,
                resolve: resolve
            });
        })
    }

    function handle(callback) {
        // 两个if都为注册回调函数
        if (state == 'pending') {
            callbacks.push(callback);
            console.log(callbacks.length)
            return;
        }
        if (!callback.onFulfilled) {
            callback.resolve(value);
            return;
        }
        // 这里为顺序执行注册的回调函数,这里是异步操作

        var ret = callback.onFulfilled(value);
        setTimeout(() => {
            callback.resolve(ret);
        }, 1000);



    }

    function resolve(data) {
        if (data && (typeof data === 'object' || typeof data === 'function')) {
            var then = data.then;
            if (typeof then === 'function') {
                then.call(data, resolve);
                return;
            }
        }
        value = data;
        state = 'fulfilled';
        setTimeout(() => {
            callbacks.forEach(function(callback) {
                handle(callback);
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
    setTimeout(() => {
        console.log(123);
    }, 1000);
}).then(function(params) {
    console.log(345);
})