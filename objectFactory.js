function objectFactory() {

    var obj = new Object(),

        Constructor = [].shift.call(arguments);

    obj.__proto__ = Constructor.prototype;

    var ret = Constructor.apply(obj, arguments);
    // 又返回值并且是对象才会返回
    return typeof ret === 'object' ? ret : obj;

};
// 寄生组合式继承
function father (name) {
    this.name = name
}
father.prototype.sayName = function () {
    console.log(this.name)
}
function child (age) {
 father.call(this, 'sb')
 this.age = age
}
function F() {}
F.prototype = father.prototype
child.prototype = new F()
var abc = new child(22)
console.log(abc)
