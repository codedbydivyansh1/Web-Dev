// function

// function greeting(){
//     console.log("hello");
//     return 10;

// }

// addnumber(2,3)
// function addnumber(num1,num2,num3=0){
//     const sum = num1+num2+num3;
//     console.log(sum)
// }

// greeting();
// addnumber(2,3)
// addnumber(2,200)
// addnumber(2,3,4)



// function addnumber(...num){
//     let sum = 0;
//     for(let n of num){
//         sum+=n;
//     }
//     console.log(sum)
// }
// addnumber(1,2,3,4,100,5,6,)
// console.log(greeting())


// const arr = [10,20,30,40,50,60,70];
// const arr2 = [30,40,50]


// const [first,second, ...num] = arr;
// console.log(first,second,num)

// const ans = [...arr,...arr2]
// console.log(ans)

// function:expression


// console.log(addnumber(2,3));
// addnumber = function(n1,n2){
//     return n1+n2;
// }



// arrow function 

// const addnumber = (num1,num2)=>{
//     return num1+num2;
// }


// const addnumber = (num1,num2)=> num1+num2;

// let arrr = [10,2,30,40,50];
// arrr.sort((a,b)=>a-b);

// console.log(addnumber(10,20));

// if we have single parameter no need of this ()
// const squarenumber = num1=>num1*num1;
// console.log(squarenumber(3))


// const greeting= ()=> {
//     return user ={
//         name:"divyansh",
//         age:20
//     }
// } 

// const greeting= ()=> ({name:"divyansh",age:20})


// console.log(greeting())


// IFE

// (function greeting(){
//     console.log("hello ji");
// })();


// (()=>{
//     console.log("hello")
// })();



// callbacks


// function greet(){
//     console.log("hello ji kaise ho")
// }

// function dance(){
//     console.log("i am dancing")
// }

// function meet(callback){
//     console.log("I am going to meet someone")
//     callback();
//     // greet();

//     console.log("finsihed")
// }

// meet(greet)
// meet(dance)



// blinkit 


function blinkitorderplaced(){
    console.log("started packing your order")
}
function zomatoorderplaced(){
    console.log("started preparing order")
}
function payment(amount,callback){
    console.log(`${amount} payment has initiazlied`);
    console.log("payment done");
    // zomatoorderplaced();
    callback();


    // GST
    // rider ko kitna
    // company ko kitna 
}

payment(1000,zomatoorderplaced);
payment(10,blinkitorderplaced);
