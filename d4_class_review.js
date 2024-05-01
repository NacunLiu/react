class Test810 {
    constructor(name, reading) {
        this.name = name
        this.reading = reading
    }
    // 可以直接在类里边给类加属性
    a = 1
    wheel = 4
}
m1 = new Test810("meter1", 100);
m2 = new Test810("meter2", 200)
// console.log(Test810)
console.log(m2);