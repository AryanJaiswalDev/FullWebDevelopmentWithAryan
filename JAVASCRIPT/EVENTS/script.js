//change in state of an object called evenet
// mouse event,keyboard event,form event,print event & many more

//let btn1=document.querySelector("#btn1");
// btn1.onclick = (evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log("btn 1 was clicked ");
//     let a=25;
//     a++;
//     console.log("value of a is : ",a);
//};
// btn1.addEventListener("click", ()=> {

//     console.log("button was clicked ")
// });

let div=document.querySelector("div");
div.onmouseover=()=>{
    console.log("mouseover div ")
}

//js event handling> inline event handeling

//event object 
// having details about the event 
// e.target e.type e.clientX e.clientY
// .. node.event=(e)=>{
//     //handel
// }

// event listeners 
// node.addEventListner(event,callback)
//node.removeEventListner(event,callback)
//same event pe multiple kaam karaskte hai 

let btn1=document.querySelector("#btn1");
btn1.addEventListener("click", ()=> {

    console.log("button was clicked handeler 1")
});
btn1.addEventListener("click", ()=> {

    console.log("button was clicked handeler 2")
});

const handeler3=()=>{
    console.log("button was clicked handeler 3")
};
btn1.addEventListener("click", ()=> {

    console.log("button was clicked handeler 4 ")
});
btn1.removeEventListener("click",handeler3);

let modbtn=document.querySelector("#mode");
let currmode="light";
let body=document.querySelector("body")
modbtn.addEventListener("click",()=>{
    //console.log("changi the mode ");
    if(currmode==="light"){
        currmode="dark";
        // document.querySelector("body").style.backgroundColor="black";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currmode="light";
        // document.querySelector("body").style.backgroundColor="white";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currmode);
});

