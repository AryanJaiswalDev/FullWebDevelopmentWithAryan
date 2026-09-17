console.log("heylooo");
"abc".toUpperCase();
[1,2,3].push(4);

// defining fxn
function myfunction(){
    console.log("this is my first function non parameterized");
}

myfunction();//fxn call


function add1(a,b,c){
    //fxn parameters are local variable having block scope 
    //local variable --> work only in the fxn scope 
    // console.log(a+b+c);
    s=a+b+c;
    return s;
}
let val =add1(3,5,8);
console.log(val);

function add(a,b,c){
     console.log(a+b+c);
   
}
add(3,5,8);
//modern JS 
// ARROW FUNCTION --> const fxnname= () => { }
    function mul(a,b){
        return a*b;
        }
        const arrowmul=(a,b)=>{
            console.log(a*b);
        }

        const printhello=()=>{console.log("hey myself aryan")};


 // for each Loop in array 
//only used in arrays not in strings
//higher order method 

function abc(){
    console.log("heyyyyy");
}
function myfxn(abc){
    return abc;
}
let arrr=[1,2,3,4,5,6];
arrr.forEach(function printvalue(val){
    console.log(val);

});


let city=["delhi","mumbai"];
city.forEach((val,idx,city)=>{
    console.log(val.toUpperCase(),idx,city);
});
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

// reduce method
// perform some opertions & reduce the array to single value.it returbs that single value.

const array=[1,2,3,4,5,6];
const initialvalue=0;
const sumwithinitial=array.reduce((accumulator,currentvalue)=>accumulator+currentvalue,initialvalue);
console.log(sumwithinitial);

const geat=[2,6,5,3,9,90];

const output=geat.reduce((prev,current)=>{
    return prev>current?prev:current;
});
console.log(output);


let marks=[60,78,90,89,65,34,89,90,99,999];
let toppers=marks.filter((val)=>{
    return val>90;
})
console.log(toppers);

let n=prompt("enter a number");
let arr6=[];
for(let i=1;i<=n;i++){
    arr6[i-1]=i;
}
console.log(arr6);
let sum=arr6.reduce((res,curr)=>{
    return res+curr;
});
console.log(sum);
       

        


