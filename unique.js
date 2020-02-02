function unique (array) {
    var obj = {}
    return array.filter((item) => {
        // return obj.hasOwnProperty(item) ? false : (obj[item] = true)
        // return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
        //复杂数据结构NaN Obj...
        return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true)
    })
}
// 交集
// var arr = firstArr.filter((item) => new Set(secArr).has(item))
// 并集
// [...new set(...arr1,... arr2)]
// 差集
// var arr = firstArr.filter((item) => !new Set(secArr).has(item))

