//Arithmetic operators 
let a=5;
let b=7;
console.log("a+b =",a+b);
console.log("a-b",a-b);
console.log("division =",a/b);
console.log("modulus =",a%b);
console.log("multiplication =",a*b);
console.log("increment =",a++);
console.log("decrement =",b--);
console.log("increment =",++a);
console.log("decrement =",--b);
console.log("a^b =",a**b);

// Assignment operators
a=10;
console.log(a+=7);
console.log(a*=b);
console.log(a-=b);
console.log(a/=b);
console.log(a%=b);
console.log(a**=b);

//comparision operators
console.log(a==b);//checks only value
console.log(a!=b);
console.log(a===b);//checks value + datatypes
console.log(a!==b);//checks value + datatypes
console.log(a<=b);
console.log(a>=b);
console.log(a>b);
console.log(a<b);

//Logical operators 
a=0;
b=1;
console.log(a&&b);
console.log(a||b);
console.log(!b);
console.log(a>b&&b<a);
console.log(a<b||b==9);

//conditional statements 

//if else statements 

let age=2;
if(age>18){
    console.log("you can vote ")
}else{
    console.log("not eligible for vote ")
}

// else if else ladder 
let age2=10;
if(age2<18){
    console.log("junior");
}
else if(agee==18){
    console.log("teenage");
}else{
    console.log("young boy");
}

//ternary operator
let num=10;
let result=(num==10)?"child":"adult";
console.log(result);

//switch statments
const expe="papaya";
switch(expe){
    case "papaya":
        console.log("its papaya");
        break;
        case "apple":
            console.log("its apple");
            break;
}

// MDN Docs
//it is resourse for developement by developers









/*
## operators and conditional statements ##
> 
*/