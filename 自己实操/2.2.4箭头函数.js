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
//箭头函数作用域 这个this会默认调用Window对象
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