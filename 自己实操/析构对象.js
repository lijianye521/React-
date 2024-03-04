const sandwich ={
    bread:"dutch crunch",
    meat: "tina",
    cheese: "swiss",
    toppings: ["lettuce","tomato","mustard"]
};
//下面这段代码中从sandwich对象中取出bread和meat。
// const {bread,meat}=sandwich;
// console.log(bread,meat)
//下面这段代码使用let关键字对sandwich对象没有影响。
let {bread,meat}=sandwich;
bread ="garlic";
meat="turkey";
console.log(sandwich.bread,sandwich.meat);
//还可以析构传给函数的参数
const lordify = ({spouse:{firstName}})=>{
    console.log(`${firstName} of Shanghai` );
}
const regularPerson ={
    firstName:'Bill',
    lastName:'Wilson',
    spouse:{
        firstName:"Phil",
        lastName:"Wilson"
    }
}
lordify(regularPerson)