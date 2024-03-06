let color_lawn={
    title:"lawn",
    color:"#00FF00",
    rating:0
};
// //不好的做法
// function rateColor(color,rating){
//     color.rating=rating;
//     return color;
// }
// console.log(rateColor(color_lawn,5).rating);
// console.log(color_lawn.rating);//这样会改变原有的数据
// const rateColor =function(color,rating){
//     return Object.assign({},color,{rating:rating});
// }
// console.log(rateColor(color_lawn,5).rating);// 5
// console.log(color_lawn.rating);// 0
//箭头函数
// const rateColor =(color,rating)=>({
//     ...color,
//     rating
// })
// //注意 返回的对象在一对圆括号内，使用箭头函数一定要这样做，因为箭头不能直接指向一个对象的花括号。
let list =[{title:"Rad Red"},{title:"Lawn"},{title:"Party Pink"}];
// const addColor =function(title,colors){
//     colors.push({title:title});
//     return colors;
// }
// console.log(addColor("Glam Green",list).length);//4
// console.log(list.length);
// console.log(list);
const addColor =(title,array)=>array.concat({title});
console.log(addColor("Glam Green",list).length);//4]
console.log(addColor("Glam Green",list))
console.log(list.length);
console.log(list);