

const arr = [2,4,5,8];
console.log(arr)
arr.filter((item)=>{
    console.log(item)
})
// take varible
let result = arr.filter((item) =>{
    return item>4})

console.warn(result)