console.log("aryan")
console.log("aryan")
console.log("aryan")
console.log("aryan")
console.log("aryan")
console.log("aryan")
console.log("aryan")
console.log("aryan")
console.log("aryan")
console.log("aryan")
console.log("aryan")
console.log("aryan")
console.log("aryan")
console.log("aryan")
console.log("aryan")
console.log("aryan")

for(let i=0;i<15;i++){
    console.log("jaiswal");
}
let sum=0;
for(let i=1;i<=5;i++){
    sum+=i;
}
console.log(sum);

//infinite loop > no stoping condition 

// while loop 
//initialization
let p=1;
while(p<6){
    console.log("aryan jaiswal");
    p++;
}

// do while loop 
let i=1;
do{
    console.log(i);
    i++;

}while(i<=10);

// for-of Loop
//dont use for object
// string and array pe loop me help 
let str="aryan";
for(let i of str){
    console.log("i="+ i);
}
let str2="Aryan jaiswal";
let size=0;
for(let i of str2){
    console.log("i=",i);
    size++;
}
console.log("size is =",size);

//for-in loop (used for objects )
let student={
    name:"aryan",
    age:20,
    cgpa:10
};

for(let i in student){
    console.log("key =",i ,"value is =",student[i]);
}


/*
Loops in js:
> to execute a piece of code again and again.
> types: for , while , do while .*/
