function throttle (func, wait) {
    var context ,args, result, timeout;
    var pre = 0;
    var later = function () {
        pre = +new Date()
        timeout = null
        func.apply(context, args)
    }
    var throttle = function () {
        var now = +new Date()
        args = arguments
        context = this
        var remaining = wait - (now - pre)
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout)
                timeout = null
            }
            pre = now
            result = func.apply(context, args)
            return result
        } else if (!timeout) {
            timeout = setTimeout(later, remaining)
        }
    }
    throttle.cancel = function () {
        clearTimeout(timeout)
        timeout = null
        pre = 0
    }
    return throttle
}
