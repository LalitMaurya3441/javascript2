
//Objects Literals

const Object1 ={
    name : "Lalit Kumar",
    Roll_no :2250030,
    Collge: "NIT Patna",
    Email : "lalitk.dd22@gmail.com",

}
// console.log(Object1.Roll_no);
// console.log(Object1.Collge);
// console.log(Object1["name"])

Object1.name = "Supriya Sharma";

// console.log(Object1);

// Object1.greeting = function(){
//     console.log("Hello,Myself Lalit Maurya")
// }
// console.log(Object1.greeting());

// Object1.greeting1 = function(){
//     console.log(`Hello,Myself Lalit Maurya, ${this.name}`)
// }
// console.log(Object1.greeting1());

const object2 = new Object();

// console.log(object2);

const Regularentry = {
    useremail : "lk286062@gmail.com",
    full_name : {
        full_name:"Lalit",
        last_name :"Maurya",
    }
}
// console.log(Regularentry.full_name);

const obj1 = {1:"a",2:"b"}
const obj2 = {3: "a",4:"b"}
const obj3 = {5:"a",6:"b"}

// const obj4 = Object.assign(obj1,obj2,obj3);
const obj4 = {...obj1,...obj2,...obj3}



// console.log(obj4)

// console.log(Object.keys(Object1))
// console.log(Object.values(Object1))
// console.log(Object.entries(Object1))
// console.log(Object.hasOwnProperty('Email'))

const {useremail:Email} = Regularentry
console.log(Email);

