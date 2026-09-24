
//practice 1 
// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText+" appending using innertext property";

// let divs=document.querySelectorAll(".box");
// // console.dir(divs[0]);
// divs[0].innerText="new value";

// let idx=1;
// for(div of divs){
//     div.innerText='new value unique ${idx}';
//     idx++;
// }

//practice 2
let btn=document.createElement("button");
btn.innerText="click me boss";
btn.style.backgroundColor="red";
btn.style.color="white";
document.querySelector("body").prepend(btn);
