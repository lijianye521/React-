const frederick = {
    name:"Frederick Douglass",
    canRead:false,
    canWrite:false
};
const selfEducate = person=>({
    ...person,
    canRead:true,
    canWrite:true
});
console.log(selfEducate(frederick));
console.log(frederick);
