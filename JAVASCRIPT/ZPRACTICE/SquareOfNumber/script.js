let arr=[2,3,4,5,6,7,8,9,10];
arr.forEach((val)=>{
    console.log("square ofvalue :",val**2);
})

// let calculatesquare=(val)=>{
//     console.log("square ofvalue :",val**2);
// };
// arr.forEach(calculatesquare);

// MAP method
//create a new array with the result of some operation. the value is its callback returns are used to form new array
// arr.map(callbackfxn(value,index,array))

let newarr=arr.map((val)=>{
    console.log(val);
});

let newarr2=arr.map((val)=>{
    return val;
});
console.log(newarr2)

//filter method 
// creates a neww array of element that give true for a condition/filter . eg. all even numbers 
// let neww arr=arr.filter((val)=>{
//    return val%2===0;})

let newarr3=arr.filter((val)=>{
    return val%2===0;
});
console.log(newarr3);
