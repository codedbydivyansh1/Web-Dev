// scope and closure ,HOF

// let a =10;
// const b = 20;
// var e =30;

// console.log(a)




// function greet(){
//     let c  =30;
//     console.log(c);
// }
// console.log(c)


// if(true){
//     var f =30;
// }

// console.log(f)
// greet();


// let global = 30;


// function greet(){
//     let global = 40;

//     function meet(){
//         let global = 50;
//         console.log(global);
//     }
//     meet();
// }

// greet();


// function createcounter(){

//     let count = 0;
//     function increment(){
//         count++;
//         return count;
        
//     }
//     return increment;
// }


// const counter=createcounter();
// console.log(count)
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 

// count()


// let balance = 500;

// balance+="   rohit";

// console.log(balance)

// let balance = 500;
// // private
// let user = {
//     // balance:500,
//     deposit:function(amount){
//         if(typeof amount==="number" && amount>0){
//             balance+=amount;
//             return balance;
//         }
        
//     },

    
//     withdraw:function(amount){
//         if(typeof amount==="number" && amount>0 && balance>=amount){
//             balance-=amount;
//             return balance;
//         }
        
//     },

//     getbalance: function(){
//         return balance;
//     }

    
// }

// balance+=10;

// user.balance = "divyansh";
// console.log(user.getbalance());


// console.log(user.deposit(1000))

// console.log(user.deposit(200));


// method ko access(function)
// balance:usko directly no access



// function createbankaccount(){
//     let balance = 500;
// // private
// const user = {
//     // balance:500,
//     deposit:function(amount){
//         if(typeof amount==="number" && amount>0){
//             balance+=amount;
//             return balance;
//         }
        
//     },

    
//     withdraw:function(amount){
//         if(typeof amount==="number" && amount>0 && balance>=amount){
//             balance-=amount;
//             return balance;
//         }
        
//     },

//     getbalance: function(){
//         return balance;
//     }

    
// }

// return user;
// }

// // console.log(user.getbalance());

// const customer = createbankaccount();
// console.log(customer.withdraw(210));


// Higher order function


// function double(value){

    // return function execute(num){
        // return num*value;
    // }
    // return execute;
// }

// const a = double(20)(5);
// console.log(a);