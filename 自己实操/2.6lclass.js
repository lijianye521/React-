function Vacation (destination,length){
    this.destination = destination;
    this.length = length;
}
Vacation.prototype.print=function(){
    console.log(`${this.destination} | ${this.length} days`);

}
const maui = new Vacation("Maui",7);
maui.print();
//这段代码有点类似于面向对象语言中的自定义类型
//有一个print方法，maui通过原型继承print方法 虽然ES2015引入了类的声明语法 但是javascript的运作方式没有变化 函数还是对象 继承仍然通过原型处理
class Vacation2 {

    constructor(destination, length) {
      this.destination = destination
      this.length = length
    }

    print() {
      console.log(`${this.destination} will take ${this.length} days.`)
    }

    }
    
    const trip = new Vacation2("Santiago, Chile", 9)

    trip.print()

class Expedition extends Vacation2 {
    constructor(destination,length,gear){
        super(destination,length);
        this.gear=gear
    }
    print(){
        super.print();
        console.log(`Bring your ${this.gear.join("and your")}`)
    }
}
const tripExpedition = new Expedition("厦门",3,["camera","money","sunglasses"])
tripExpedition.print();