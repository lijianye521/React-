// const peaks=["Tallac","Ralston","Rose"];
// const canyons=["Ward","Blackwood"];
// const tahoe =[...peaks,...canyons];
// console.log(tahoe.join(","));//Tallac,Ralston,Rose,Ward,Blackwood
// //如果不想获取第一个元素 获取最后一个元素
// const [last]=peaks.reverse();
// console.log(last);//Rose
// console.log(peaks);//Rose,Ralston,Tallac
// //在有展开运算符的情况下，我们不需要改变原数组，而是创建一个副本
// const peaks=["Tallc","Ralston","Rose"];
// const [last]= [...peaks].reverse();
// console.log(last);
// console.log(peaks.join(","));
//获取数组的剩余元素
// const lakes = ["Donner","Marlette","Fallen Leaf","Cascade"];
// const [first,...others]=lakes;
// console.log(others.join(","))
//剩余参数
// function directinos(...args){
//     let [start,...remaining]=args;
//     let [finish,...stops]=remaining.reverse();
//     console.log(`drive through ${args.length} towns`);
//     console.log(`start in ${start}`);
//     console.log(`the destination is ${finish}`);
//     console.log(`stopping ${stops.length} times in between`);

// }
// directinos("Truckee","Tahoe City","Sunnyside","Homewood","Tahoma");
//展开运算符处理对象
const morning = {
    breakfast: "oatmeal",
    lunch: "peanut butter jelly"
}
const dinner ="mac and cheese";
const backpackingMeals={
    ...morning,
    dinner
}
console.log(backpackingMeals)