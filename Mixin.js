function Mixin(...mixins) {
  class Mix {
      constructor() {
          for (let mixin in mixins) {
              copyProperties(this, new mixin())
          }
      }
  }
    for (let mixin of mixins) {
        copyProperties(Mix, mixin); // 拷贝静态属性
        copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
    }
    return Mix;
}
function copyProperties(target, source) {
    for (let key of Reflect.ownKeys(source)) {
        if ( key !== 'constructor'
            && key !== 'prototype'
            && key !== 'name'
        ) {
            let desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }
}
class xxx {
    constructor() {
        this.state = {
            a: 1
        }
    }
    say () {
        console.log(this.state.a)
    }
}
for (let key of Reflect.ownKeys(xxx)) {
   console.log(key)
}
