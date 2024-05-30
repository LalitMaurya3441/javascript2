const coding = ["js","python","ruby","php"]

// coding.forEach((item,array)=>{
//     console.log(item,array)
// })

//Filter function
const  Mynums = [5,6,8,2,7,9,1,2];
// const newNums = Mynums.filter( (num) => num>4) 
// console.log(newNums)
const newNums = []
Mynums.forEach((num) => {
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums)
