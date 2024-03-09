// const schools=["Yorktown","Washington&Liberty","Wakefield"];
// // console.log(school.join(","));
// //Array.join()是JavaScript内置的数组方法，作用是从数组中提取出以特定符号分割的字符串。原数组完好无损
// //如果想要定义一个函数,创建一个新数组,存储名称为以W开头的学校,可以使用Array.filter方法
// const wSchools=schools.filter(school=>school[0]==="W");
// console.log(wSchools);

// const cutSchools = (cut,schools)=>schools.filter(school => school !==cut);
// console.log(cutSchools("Yorktown",schools));

// const highSchools= schools.map(school=>`${school} High school`);
// console.log(highSchools);
// const highSchools2 = schools.map(school=>({名字:school}))
// console.log(highSchools2);

// let schools = [
//     {name:"中国矿业大学"},
//     {name:"南京工业大学"},
//     {name:"河南大学"},
//     {name:"北京大学"}
// ];

// const editName = (oldName,name,arr)=>arr.map(item=>(item.name===oldName ? {...item,name}:item));


// let updateSchools = editName("河南大学","清华大学",schools);

// console.log(updateSchools);
// console.log(schools);
//把一个对象转化为数组
// const schools = {
//     Yorktown: 10,
//     "Washington & Liberty":2,
//     Wakefield:5
// }
// //Object.keys(object) 返回一个由对象键值组成的数组
// const schoolArray= Object.keys(schools).map(key=>({name:key,wins:schools[key]}))
// /*
// console.log(schoolArray);
// [
//     { name: 'Yorktown', wins: 10 },
//     { name: 'Washington & Liberty', wins: 2 },
//     { name: 'Wakefield', wins: 5 }
// ]
// */  


// const ages = [21,18,42,40,64,63,64];
// const maxAge = ages.reduce((max,age)=>{
//     console.log(`${age}>${max}=${age>max}`)
//     return age>max?age:max;
// },0)
// console.log("maxAge:",maxAge)

const colors = [
    {
        id: '-xekare',
        title: "rad red",
        rating: 3
    },
    {
        id: '-jbwsof',
        title: "big blue",
        rating: 2
    },
    {
        id: '-prigbj',
        title: "grizzly grey",
        rating: 5
    },
    {
        id: '-ryhbhsl',
        title: "banana",
        rating: 1
    }
];
const hashColor =colors.reduce((hash,{id,title,rating})=>{
    hash[id] = {title,rating};
    return hash;
},{});
console.log(hashColor);