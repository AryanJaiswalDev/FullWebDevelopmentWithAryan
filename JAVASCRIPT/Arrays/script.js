//by object form 
let marks={
    stud1:98,
    stud2:23,
}
//ARRAY (linear way to store)
//array is an special object in JS 
let markss=[12,34,56,78,90,111];
let heroes=["aryan",'superman',"ironman"];
let info=["rahul",98,'a'];
console.log(markss);//int array
console.log(info);
console.log(heroes);//string array
console.log(markss.length);//array length
console.log(markss[0]);
console.log(markss[100]);
heroes[3]="bananananananananan";
console.log(heroes[3]);
for(let i=0;i<markss.length;i++){
    console.log(markss[i]);
}
for(let ele of heroes){
     console.log(ele);
    console.log(ele.toUpperCase());
    console.log(ele.toLowerCase());
}
let sum=0;
for(let ele of markss){
    sum+=ele;
}
console.log("avg is =",sum/markss.length);   

//arrays methods 
// Push() :add to enc
// Pop(): delete from end & return
// toString():covert array to string:
// unshift(): add to front
// shift(): delete from start 
// slice(): return the piece of array
// slice(startidx,endidx)
// splice(): chnage original array (add,remove,replace )
// splice(startidx,delCoubt,newEle          )


heroes.push("SHAKTIMAN");
heroes.push("spiderman");
console.log("hero","zero","mediousm");
//element add in last of the array 
console.log(heroes);
console.log(heroes.pop());
console.log(markss.toString());
 
let marvel=["thor","ironman","spiderman"];
let ans=marvel.concat(markss,info);
console.log(ans);
console.log("deleted value from starting =",heroes.shift());
heroes.unshift("blackman");
console.log(ans);
console.log(ans.slice(2,6));
console.log(ans.splice(2,1,1029));
console.log(ans);

let companies=["Bloomerg","Microsoft","uber","gogle","ibm","netflix"];
console.log(companies.shift());//delete from front
companies.splice(2,1,"ola");//addong ola at place of uber 
console.log(companies)
companies.push("amazon");//adding at the end 
console.log(companies);