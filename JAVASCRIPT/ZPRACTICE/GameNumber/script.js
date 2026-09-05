//create a game where you start with any random game number . 
//ask the user tpo keep guessing the game number until the user enters the correct value.

let gamenumber=25;
let usernum=prompt("guess the game number :")
console.log(usernum);
while(usernum!=gamenumber){
  usernum=  prompt("wrong,guess the game number again :")

}
console.log("congoooo")