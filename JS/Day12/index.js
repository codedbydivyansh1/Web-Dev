// foreach filter reduce map set

// const arr = [10,20,30,40,"rohit",90];
// let sum = 0;


// arr.forEach((number)=>{
//     sum+=number;

// })
// console.log(sum)


// filter
// const newarr = arr.filter((number)=>number>25);
// console.log(newarr)


// Array.prototype.filtering = function(compare){
//     const ans =[];
//     for(let num of this){
//         if(compare(num)){
//             ans.push(num)
//         }
//     }
// return ans;
// }
// const newarr = arr.filtering((num)=>num>25);
// console.log(newarr)

// return ans;

// const arr1 = [90,80,0]

// arr1.sorting = function(sorte){
//     const na = [];
//     for(let a of this){
//         if(sorte(a)){
//             na.push(a);
//         }

//     }
//     return na;

// }

// const bc = arr1.sorting((a)=> a-b)
// console.log(bc)


// const na = [10,20,30,40,50];
// const na1 = na.filtering((num)=> num>25);
// console.log(na1)

// const arr = [10,20,30,5,90,87]

// const newarr = arr.map((num)=> num*num);
// console.log(newarr)


    const products = [
    // Electronics
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
    { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
    { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
    { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

    // Books
    { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
    { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
    { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

    // Appliances
    { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
    { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
    { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
    { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

    // Clothing
    { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
    { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
    { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

    // Home Goods
    { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
    { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
    { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

    // Groceries
    { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
    { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
    ];

const newproduct = products.filter((product)=> product.price>50).sort((a,b)=>b.price-a.price).map((product)=>({name:product.name, price:product.price,id:product.id}));

// const newmaps = products/.map((product)=>({name:product.name, price:product.price,id:product.id}))
// console.log(newproduct)
// console.log(newmaps)
// const new1 = products.map((product)=>({price:product.price+=}));
// console.log(new1);



// reduce
// accumulaotr = sum=0;
// accumulator = 1200+200=1400
// [{},{}]
// const addedprice = products.reduce((accumulaotr,currentvalue)=>{
//     if(currentvalue.inStock)
//     return accumulaotr+currentvalue.price;
//     else
//     return accumulaotr
// },0);
// console.log(addedprice)

// const arr = [10,20,30,40,50,10,10,10]

// const s1 = new Set(arr)
// s1.add(10)
// console.log(s1.has(0))
// s1.delete(10)

// console.log(s1)


// const email  = ['ro@gm','divya@gm','ro@gm','divya@gm']
// const uniqueemail = [...new Set(email)];
// const s1 = new Set(email);

// for(let num of s1){
//     console.log(num);
// }
// console.log(uniqueemail)



// map:

const m1 = new Map([
    ["rohit",40],
    [2,30],
    [true,11],
    [[10,0,11],"mohit"]



]);
console.log(m1)

m1.set({name:"manish",age:20},false);

// console.log(m1)
// console.log(m1.has(2))
// console.log(m1.size)

for(let [num,a] of m1){
    console.log(num,a)
}

