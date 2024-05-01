// ...展开方法只能直接用于数组，对于对象，在原生中需要用到{}
const p1 = {name:"810", reading:200}
// 可以直接在展开的后面加入新的属性
const p2 = {...p1, type:"physical"}
console.log(p2)