name="aryan jaiswal";
age=24;
price=7.45;
x=null;
y=undefined;
isFollow=false;
let fullname="Tony kakkar";
let agee=35;
agee=90; //we can update let variable
var rollno=6;
var rollno=50;
const id=1032250603;
let a;
console.log(a); //undefined but in case of const it will give error 
console.log(rollno); //latest rollno will come
console.log(agee);
console.log(fullname);
console.log(name);
console.log(age);
console.log(price);
console.log(x);
console.log(y);
console.log(isFollow);
console.log(id);
{
    let a=10;
    console.log(a);
}
{
    let a=70;
    console.log(a);

}

let z=BigInt("1232345");
let p=Symbol("123");
console.log(z);//at the end n will be there 
console.log(p);

//making object
const student={
    fullname:"rahul",
    age:20,
    cgpa:9.9,
    ispass:true
};
student["cgpa"]=10;//changing the age
console.log(student.cgpa);



/*
        🥲😇VARIABLES🚀😁
>Variable are containers for data .
>we dont need to specify datatype before variable name 😀.
>Dynamic typed
>Variable can be redeclared & updated .A global scope variable.

      🥊rules for variable😎
1. Case sensitive.
2. only letters,digit,underscores and $ is allowed.
3. No white space allowed.
4. 1st character should be a letter,underscore or $.
5. Reserved words can not be variable names. 
6. Try to follow camel case (good developer).

      👀 Let,Const,Var 👀
> var: Variable can be redeclared & updated .A global scope variable.
> let: variable cannot be redeclared but can be updated.A block space variable.
> const: variable cannot be redeclared or updated . Ablock score variable.

        🙈 DataTypes 🙈
> Premetive datatypes : Fixed
  Number
  String
  Boolean
  Undefined
  Null (premetive)
  Symbol
  BigInt

> Non premetive datatypes : Objects(collection of values)
  Arrays
  Functions

  *we can update the key of constant object


*/