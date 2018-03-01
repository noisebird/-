var fs = require('fs');
var thunkify = require('thunkify');
var readFile = thunkify(fs.readFile);
var gen = function*() {
    var f1 = yield readFile('./text1.txt', 'utf8');
    console.log(f1);
    var f2 = yield readFile('./text2.txt', 'utf8');
    console.log(f2);

    var f3 = yield readFile('./text3.txt', 'utf8');
    console.log(f3);
};

function run(fn) {
    var gen = fn();

    function next(err, data) {

        console.log(data)

        var result = gen.next(data);
        if (result.done) return;
        // console.log(result)
        result.value(next);
    }
    next();
}
run(gen); //自动执行