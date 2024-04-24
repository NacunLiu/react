class Meter {
    constructor(name,sin) {
        // 当用Meter的实例对象进行接收时, this就是对应的实例对象
        this.name = name
        this.sin = sin
    }
    test_res () {
        console.log("meter name:" + this.name + "meter number: "+ this.sin)
    }
}
const test810 = new Meter("AcuLink810_v0.76", "S8P53070095")
test810.test_res()
// inherit 如果写新的属性，那么必须用super方法继承父类的属性， 所有方法保存在proto_type里
class Slave extends Meter {
    constructor(name, sin, type){
        super(name, sin)
        this.type = type
    }
}
slave_1310 = new Slave("acurev1310", "E3T17094713", "RS485")
slave_1310.test_res()