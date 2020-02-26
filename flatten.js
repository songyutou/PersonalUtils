function f(arr) {
    while (arr.some((item) =>Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}
function f1(arr) {
    return arr.reduce((prev, next) => {
        return prev.concat(Array.isArray(next) ? f1(next) : next)
    }, [])
}

