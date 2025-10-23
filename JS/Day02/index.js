// // variable ko kaise banate hain 


// let name = "rohit";
// let age = 20

// age =30
// console.log(name,age)


// const account =1234;
// account=1232;
// console.log(account)

// var a = "10";
// var a = "20";
// var a ="30";


// if(true){
//     var a = 20;

// }

// function funf() {
//     var c =20;
// }
// console.log(c)




// datatypes
// primitive 

// number string boolean undefined null bigint symbol


// number
let a = 12.2220;
console.log(a);


// string

let c = "strike is coming"
let d = "divyansh"
console.log(c,d)

// boolean

let login = true;
let  f = false;
console.log(login,f)



//undefined

let user;
console.log(user)


// bigint


let b = 21928301823018310n;
console.log(b)


// null

// let weather = null;
// console.log(weather)
// let weatherr  = current_weather("dwarks")
//25
//null
//undefined


const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1==id2);
// non primitve 


// array

let arr = [10,20,"rohit",1121212]
console.log(typeof arr)




// object

// rohit 12312 18 gem

let obj = {
    name:"Divyansh",
    account:12312,
    age:18,
    category:"gen"
}
// console.log(typeof obj)



//function

let s =  function add(){
    console.log(2+9)
}

console.log(s)
console.log(typeof(s))

console.log(obj)
// array,object,function 


// primitve is immutable

let str = "div";
str[0]=id1;
console.log(str)

let e = 10;
let g=e;
g=20;
console.log(e,g)



//non primitve change kar sakte 


let arr1 = [10,20,30,40]
arr1.push(90)
console.log(arr1)

let obj1={
    name:"divyansh",
    age:20


}
// obj1.name = "soumil"
console.log(obj1.name)


let obj2=obj;
obj2.name="rohan"
console.log(obj2.name)