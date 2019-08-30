// write in javascript here
// alert("HELLO FROM APP.JS");
// above comment is to confirm that Javascript is linked
// should give pop up message
var pics = [
    "imgs/tigger1.png",
    "imgs/tigger2.png",
    "imgs/tigger3.png",
    "imgs/tigger4.png"
];
// is the above thing an array?? A: Array

var btn = document.querySelector("button");
// looks for first instance of button and stores it as a variable
var img = document.querySelector("img");
var counter = 3;

btn.addEventListener("click", function(){
    if(counter===4){
        counter= 0;
    }
    img.src= pics[counter]
    counter= counter + 1;


});



