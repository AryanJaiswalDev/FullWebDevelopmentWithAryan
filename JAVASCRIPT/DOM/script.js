// // console.log("hello");
// // alert("kya kaam hai ? ");
// // //windows objects 




// // //it is a global object with lots of properties and methods and is automaticllay crrated by browser its a browser object not js objects 


// // window.console.log("hello2");

// // // DOM 
// // // Document object model 
// // // when a page is loaded, the browser creates a dom of the page 
// // // console.dir --> prints object 
// // //html lka sara code js me accsess kiya  ja skta hai aur js me vo ek object ke form me jata hai ussi object ko DOM bolte hain .

// // // WINDOW--->DOCUMENT--->HTML--->HEAD & BODY

// //console.dir(document.body);
// console.log(document.body);
// console.log(document.head);
// console.dir(document.body.childNodes[1]);

// //dynamic changes by user in console thats is why dom useing 
// document.body.childNodes[1].innerText="abcdef";

//dom manipulation
// 1st--> select with id 
let heading=document.getElementById("headingid");//return value of h1 
console.dir(heading);

// 2nd--> select via class
let classs=document.getElementsByClassName("q");//return collectios 
console.dir(classs);
console.log(classs);

// 3rd--> select via tag
let para=document.getElementsByTagName("p");
console.dir(para);
console.log(para);

//QUERY SELECTOR --> return node list 
let firstelements=document.querySelector("p");//one element
console.dir(firstelements);//via tag

let allelements=document.querySelectorAll("p");//all elements 
console.dir(allelements);

let classele=document.querySelectorAll(".h2");
console.dir(classele);//via class 

let accsessbyid=document.querySelector("#headingid");
console.debug(accsessbyid);//via id 

//properties 
//> tagname:return tage for element Node
//> innerText:returns the text contemt of the element and its Children
//> innerHTML: return the plain text or html cpntents int the element 
//> textContent:returns textual content even for hidden elements 
//check in console firstelements.tag --> p will output as its is paragraph 

//DOM tree contains three type of trees
//>text nodes
//>comment nodes
//>element nodes (most used)

//study about first child,last child div.childern[0]....

let div=document.querySelector("div");
console.dir(div);
