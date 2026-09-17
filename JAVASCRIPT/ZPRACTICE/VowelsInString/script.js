function vowels(msg){
    msg.toLowercase;
    //string,count
    let count=0;
    for(const char of msg){
        // console.log(char);
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u') count++;
    }
    console.log(count);

}
vowels("hey this isooooo aryan");

"abc".toUpperCase();

// for each Loop in array 
//only used in arrays not in strings

function abc(){
    console.log("heyyyyy");
}
function myfxn(abc){
    return abc;
}
let arr=[1,2,3,4,5,6];
arr.forEach(function printvalue(val){
    console.log(val);

});


let city=["delhi","mumbai"];
city.forEach((val,idx,city)=>{
    console.log(val.toUpperCase(),idx,city);
});
