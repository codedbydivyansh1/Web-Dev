
// execution context
// memory allocation
// a=undefined
// b=undefined
// addnumber = fncode
// sumresult1=undefined
// sumresult2=undefined


// execution phase

// console.log(a)
// var a = 10;
// var b = 20;

// var sumresult1=addnumber(a,b);
// console.log(sumresult1)
// function addnumber(num1,num2){
//     var sum = num1+num2;
//     return sum;
// }

// var sumresult1 = addnumber(a,b)
// var sumresult2 = addnumber(4,5)
// console.log(sumresult1,sumresult2)



// let const
// memroy allocate
// a = unintiallised value {temporal dead zone}
// b = unintiallised value {temporal dead zone}
// addnumber = unintiallised value {temporal dead zone}
// result = unintiallised value {temporal dead zone}

// execution

// now a=10
// b=20

let a =10;
const b =20;

// console.log(result)



const addnumber =function(num1,num2){
    const sum = num1+num2;
    return sum;
}
// console.log(b)

const result = addnumber(a,b);
console.log(result)

