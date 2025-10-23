// objects
// key value

// const user = {
//     name:"Divyansh",
//     age:20,
//     emaild:"shukla3107@gmail.com",
//     amount:3400
    

// }
// console.log(user["name"]);
// console.log(user.age)
// user.age= 18;
// console.log(user.age)

// console.log(user)

// CRUD Operation: Create read update delete
// console.log(user.age);

// user.adhar = 1234;
// // update
// user.amount = 3000;



// console.log(user);


// delete user.emaild;
// console.log(user);


// const user = {
//     name:"Divyansh",
//     age:20,
//     emaild:"shukla3107@gmail.com",
//     amount:3400
    

// }

// const user2 = user;
// user2.age = 90;

// console.log(user)

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// for in
// for(let keys in user){
//     console.log(keys,user[keys]);
// }



// for of loop



// temparr = Object.keys(user);
// for(let keys of temparr){
//     console.log(keys);
// }



// temparr = Object.entries(user);
// for(let [keys,values] of Object.entries(user)){
//     console.log(keys,values);
// }


// destructuring object
// const{name:username,age,amount} = user;
// console.log(username,age,amount);


// const arr = [10,20,30,40,90,11];
// const [first,second] = arr;
// console.log(first,second)


// const user = {
//     name:"Divyansh",
//     age:20,
//     emaild:"shukla3107@gmail.com",
//     amount:3400,
//     greeting:function(){
//         console.log(`strike is coming  price will be ${this.amount}`);
//         return 20;
//     }
    

// }

// const va = user.greeting();
// console.log(va)


// nested object 
// const user = {
//     name:"ROHIT",
//     age:20,
//     emailid:"shukla@gmail.com",
//     amount:3200,
//     address:{
//         city:"dehradun",
//         state:"uttrakhand"
//     },
//     greeting:function(){
//         console.log("sexy")
//     }

// }
// shallow copy
// const user2 = {...user} ;

// user2.address.city="Dwarka";
// console.log(user2)
// console.log(user)


// const user2 = structuredClone(user);
// user2.address.city ="Dwarki";
// console.log(user2)
// console.log(user)


// console.log(user.address.city)

// key string or symbol
// const syn = Symbol("id");

// const user= {
//     name:"rohit",
//     age:20,
//     0:100,
//     2:"Mohan",
//     [syn]:"hello"
// }


// const arr = [10,20,30,40];


console.log(user[syn])