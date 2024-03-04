# React学习手册

> [!NOTE]
>
> 本文档只记录本人不太熟悉或者未知的语法和知识

## 第二章 Javascript新特性

### 2.1 箭头函数

箭头函数是ES6的新特性，不需要使用function关键字，经常也不使用return关键字。

```javascript
const lordify = function (firstName){
    return `${firstName} of Canterbury`;
}
console.log(lordify("lijianye"))
//它的相同写法
const lordify2= (firstName) => `${firstName} of Canterbury`;
//只接收一个参数的时候firstName这个()可以省略
console.log(lordify2("lijianye"))
const lordify3 =function (firstName,land){
return `${firstName} of ${land}`;
}
//lordify3的相同功能的写法
const lordify4 = (firstName,land)=> `${firstName} of ${land}`

console.log(lordify3('wzq','henan'))
console.log(lordify4('wzq','henan'))
```

箭头后面如果需要有多行语句，就需要用到花括号。

#### 2.1.1箭头函数下的作用域

常规函数中，不限定this的作用域

在 JavaScript 中，`this` 关键字的值取决于函数被调用的上下文。在您提供的代码示例中，`setTimeout` 内部的匿名函数并非作为对象的方法调用，而是作为普通函数调用。在非严格模式下，当一个函数不作为对象的方法被调用时，`this` 默认绑定到全局对象，在浏览器环境中是 `window` 对象。

```js
//箭头函数作用域 这个this会被替换
// const tahoe={
//     mountains:["Freel","Rose","Tallac","Rubicon","Sliver"],
//     print: function(delay=1000){
//         setTimeout(function(){
//             console.log(this.mountains.join(','))
//         },delay);
//     }
// }
// tahoe.print()
//使用箭头函数保全了this的作用域
const tahoe2={
    mountains:["Freel","Rose","Tallac","Rubicon","Sliver"],
    print: function(delay=1000){
        setTimeout(()=>{
            console.log(this.mountains.join(','))
        },delay);
    }
}
tahoe2.print()
```

### 2.4 对象和数组

#### 2.4.1析构对象

析构赋值语句把对象中字段的作用域限定在本地，以及声明将用到哪些值。以下的sandwich为例

```js
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
```

```js
//还可以析构传给函数的参数
const lordify = ({firsrName})=>{
    console.log(`${firsrName} of Shanghai` );
}
const regularPerson ={
    firsrName:'Bill',
    lastName:'Wilson',
    spouse:{
        firstName:"Phil",
        lastName:"Wilson"
    }
}
lordify(regularPerson)
```

以及析构嵌套对象的键

```js
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
```

#### 2.4.2析构数组

```js
//比如我们想析构数组中的第一个元素
const [firsAnimal]=["House","Mouse","Cat"];
//析构数组中的第三个值
const [,,thirdAnimal]=["House","Mouse","Cat"];
console.log(firsAnimal,thirdAnimal)
```

用逗号跳过不需要的值，这叫做列表匹配，在需要跳过的元素位置上使用逗号就是列表匹配。

#### 2.4.3对象字面量增强

```js
const name ="Tallac";
const elevation=9738;
const print = function(){
    console.log(`Mt.${this.name} is ${this.elevation} feet tall`);
}
const funHike ={name,elevation,print};
funHike.print()
```

#### 2.4.4展开运算符

展开运算符...，可以用于创建不同的任务。首先可以使用展开运算符合并数组。创建副本数组，获取数组剩余元素。

```js
const peaks=["Tallac","Ralston","Rose"];
const canyons=["Ward","Blackwood"];
const tahoe =[...peaks,...canyons];
console.log(tahoe.join(","));//Tallac,Ralston,Rose,Ward,Blackwood
//如果不想获取第一个元素 获取最后一个元素
const [last]=peaks.reverse();
console.log(last);//Rose
console.log(peaks);//Rose,Ralston,Tallac
// //在有展开运算符的情况下，我们不需要改变原数组，而是创建一个副本
const peaks=["Tallc","Ralston","Rose"];
const [last]= [...peaks].reverse();
console.log(last);
console.log(peaks.join(","));
/*
Rose
Tallc,Ralston,Rose
*/
//获取数组的剩余元素
const lakes = ["Donner","Marlette","Fallen Leaf","Cascade"];
const [first,...others]=lakes;
console.log(others.join(","));
/*
Marlette,Fallen Leaf,Cascade
*/
```

我们还可以使用三个点号句法把函数的参数收集到一个数组中，在函数中，这个叫做**剩余参数**。

这里我们使用展开运算定义一个可接受n个参数的函数，然后使用这个参数打印一些控制台信息。

```js
function directinos(...args){
    let [start,...remaining]=args;
    let [finish,...stops]=remaining.reverse();
    console.log(`drive through ${args.length} towns`);
    console.log(`start in ${start}`);
    console.log(`the destination is ${finish}`);
    console.log(`stopping ${stops.length} times in between`);

}
directinos("Truckee","Tahoe City","Sunnyside","Homewood","Tahoma");
```

展开运算符还可以处理对象

```js
const morning = {
    breakfast: "oatmeal",
    lunch: "peanut butter jelly"
}
const dinner ="mac and cheese";
const backpackingMeals={
    ...morning,
    dinner
}
console.log(backpackingMeals);
/*
{
  breakfast: 'oatmeal',
  lunch: 'peanut butter jelly',
  dinner: 'mac and cheese'
}
*/
```

### 2.5 JavaScript异步编程

在JavaScript中，异步任务不阻塞主线程。在等待API返回数据的时段内，JavaScript是空闲的，可以去做其他事。

#### 2.5.1使用fetch处理简单的promise

fetch函数只接收一个参数，即资源的URL。

```js
console.log(fetch("https://api.randomuser.me/?nat=US&result=1"));//输出一个挂起状态的promise
```

promise是一个对象，表示异步操作的状态是挂起、已完成或者失败。这就好像是浏览器告诉你，“嗨，我会尽自己所能去获取这个数据。不管成功与否，我都会回过头来告诉你进展”。

会看fetch的结果，挂起的promise表示获取数据之前的状态，我们要串接一个名为.then的函数，这个函数接受一个回调函数，在前一步操作执行后运行，也就是先获取一些数据，然后再做其他操作。

```js
    fetch("https://api.randomuser.me/?nat=US&results=10")
      .then(response => response.json())
      .then(members => console.log(members))
      .catch(err => console.error(err))
```

fetch向randomuser.me发起一个请求，请求成功把响应主体json化，接下来返回得到的json结构，再把结果发送给console.log函数输出到控制台，最后有一个catch函数没有得到成功处理时调用指定回调进行处理。

> 1. **链式调用（Chaining）**：Promise支持链式调用，这意味着你可以在一个Promise完成后顺序执行多个操作，并且每个操作的输出可以作为下一个操作的输入。这种模式使得管理和组织异步代码变得更加简单和清晰。
> 2. **错误处理**：通过使用`.catch()`方法，Promise链允许你在链的任何地方捕获错误。这比传统的回调函数方式更加直观和强大，因为你只需要在链的最后添加一个`.catch()`，就能捕获之前所有步骤中可能发生的任何错误。
> 3. **异步操作的同步化表示**：虽然JavaScript是单线程的，但Promise允许你以一种近似于同步代码的方式编写异步操作，这使得代码更容易理解和维护。你不需要嵌套回调，可以直接按照代码的书写顺序来理解操作的流程。
> 4. **灵活的值传递**：如你所见，每一步`.then()`都可以接收上一步的结果作为参数，并传递给下一步。这种方式非常灵活，因为你可以根据需要对数据进行处理和转换，然后再传递下去。
> 5. **统一的API**：Promise提供了一种统一的方式来处理所有的异步操作，无论是网络请求、文件操作还是定时器等。这种一致性使得学习和使用异步编程变得更加容易。

#### 2.5.2 async/await

处理promise的另一种常用方式是创建异步函数，一些开发者倾向于使用异步函数句法，因为所用的句法较熟悉，就像已同步函数代码一样。此时，我们不等待promise成功处理后返回结果在调用一系列的then函数了，而是让异步函数停止执行函数中的代码，直到promise处理成功。

```js
    const getPerson= async () => {
        try{
            let res = await fetch("https://api.randomuser.me/?nat=US&results=5");
            let{results}=res.json();
            console.log(results);
            console.log(123);
        }
        catch(error)
            {
                console.log(error);
            }
        ;
    }     
```

在成功处理promise之前，会暂停处理后序代码。此外放在try...catch后能够捕获错误。

#### 2.5.3构建promise

> Promise 构造函数是 JavaScript 中用于创建 Promise 对象的内置构造函数。
>
> Promise 构造函数接受一个函数作为参数，该函数是同步的并且会被立即执行，所以我们称之为起始函数。起始函数包含两个参数 resolve 和 reject，分别表示 Promise 成功和失败的状态。
>
> 起始函数执行成功时，它应该调用 resolve 函数并传递成功的结果。当起始函数执行失败时，它应该调用 reject 函数并传递失败的原因。
>
> Promise 构造函数返回一个 Promise 对象，该对象具有以下几个方法：
>
> - then：用于处理 Promise 成功状态的回调函数。
> - catch：用于处理 Promise 失败状态的回调函数。
> - finally：无论 Promise 是成功还是失败，都会执行的回调函数。

Promise提供了一种处理方法，把复杂的情况简化为一次成功或者失败。

下面的这个getPeople函数构建了一个新的promise，这个promise向api发送请求，如果请求成功则加载数据，如果不成功，那么则返回错误。

```js
    const getPerson = count => new Promise((resoleves,rejects)=>{
            const api =`https://api.randomuser.me/?nat=US&results=${count}`;
            const request =new XMLHttpRequest();
            request.open("GET",api);
            request.onload=()=>request.status===200?resoleves(JSON.parse(request.response).results):reject(ERROR(request.statusText));
            request.onerror=err=>rejects(err);
            request.send();
     } )
```

上面这个代码中在promise里传入了一个回调函数，函数内包含要请求的api，构建了一个get请求，当请求返回的状态码是200时，也就是成功，则把它的响应内容转换为json的形式。然后如果有错误就是reject 把错误传入到rejects中。

> Promise 类有 .then() .catch() 和 .finally() 三个方法，这三个方法的参数都是一个函数，.then() 可以将参数中的函数添加到当前 Promise 的正常执行序列，.catch() 则是设定 Promise 的异常处理序列，.finally() 是在 Promise 执行的最后一定会执行的序列。 .then() 传入的函数会按顺序依次执行，有任何异常都会直接跳到 catch 序列：

正常的使用函数

```js
    getFakeMembers(5).then(
      members => console.log(members),
      err => console.error(
          new Error("cannot load members from randomuser.me"))
    )
```

### 2.6 类

JavaScript使用原型继承实现一种类似面向对象的结构。例如，我们创建一个需要使用new运算符调用的Vacation构造函数

```js
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
```

#### 2.6.1类继承

JavaScript 类继承使用 extends 关键字。

继承允许我们依据另一个类来定义一个类，这使得创建和维护一个应用程序变得更容易。

**super()** 方法用于调用父类的构造函数。

当创建一个类时，您不需要重新编写新的数据成员和成员函数，只需指定新建的类继承了一个已有的类的成员即可。这个已有的类称为**基类（父类）**，新建的类称为**派生类（子类）**。

比如我们创建vacation的派生类 expedition，需要增加装备。

```js
class Expedition extends Vacation {
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
```

#### 2.7ES6模块

JavaScript模块存储在单独的文件中，一个文件一个模块。创建和导出模块有两种选择，从一个模块中导出多个JavaScript对象，或者从一个模块中导出一个JavaScript对象。

在下面这个示例中，导出的是print和log两个函数，text-helpers.js声明的其他变量都只存在于那个模块中。

```js
export const print = message => log(message,new Date());
export const log = (message,timestamp)=> console.log(`${timestamp.toString()}:${message}`);
```

如果只想导出一个类型，可以把export改为export default ，同样 export default都可以用于导出任何javascript数据类型。原始类型，对象，数组和函数。

```js
export default new Expedition("厦门",3,["camera","money","sunglasses"])
```

在其他文件中使用一个模块，通过import语句导入。导入多个对象的模块可以充分利用对象析构。

```js
import { print,log } from "./text-helpers";
import mtFreel from "./mt-freel";

print("print a message");
log("log a message");
mtFreel.print();
```

导入的模块变量在当前模块中可以放在其他变量名下

```js
import { print as p ,log as l } from "./text-helpers";
p("print a message");
l("log a message");
```

**CommmonJS**

在CommonJS中可以把print和log导出为对象

```js
const print = message => log(message,new Date());
const log = (message,timestamp)=> console.log(`${timestamp.toString()}:${message}`);
module.exports={print,log};
```

CommonJS不支持import语法，模块使用requeire函数导入

```js
const {log,print} = require("./txt-helpers");
```

## 第三章  JavaScript函数式编程

