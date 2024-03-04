//比如我们想析构数组中的第一个元素
const [firsAnimal]=["House","Mouse","Cat"];
//析构数组中的第三个值
const [,,thirdAnimal]=["House","Mouse","Cat"];
console.log(firsAnimal,thirdAnimal)
const name ="Tallac";
const elevation=9738;
const print = function(){
    console.log(`Mt.${this.name} is ${this.elevation} feet tall`);
}
const funHike ={name,elevation,print};
funHike.print()