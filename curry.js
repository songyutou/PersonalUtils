function sub_curry(fn) {
    var args = [].slice.call(arguments, 1)
    return function () {
        return fn.apply(this, args.concat([].slice.call(arguments)))
    }
}
function curry(fn,...args){
    var length = fn.length;//代表函数fn的参数数量
    return function(...nextArgs){
        var allArgs = [...args,...nextArgs];//收集参数
        if(allArgs.length >= length)
            return fn.apply(null,allArgs); //当参数足够时则调用原函数
        return curry(fn,...allArgs); //不够参数则,继续递归调用
    }
}
function sum(...args) {
    var f = function (...nextArgs) {
        var allArgs = [...args,...nextArgs]
        return sum(...allArgs);
    }
    f.valueOf = function () {
        return args.reduce((a, b) => {
            return a+b
        }, 0)
    }
    return f
}
