//DOM Manipulation
//get element by ID
let Heading = document.getElementById("heading");
console.log(Heading);

//get element by class
let paragraph = document.getElementsByClassName("para");
console.log(paragraph);
console.dir(paragraph);

//get element by tagname
let paras = document.getElementsByTagName("p");
console.log(paras);
console.dir(paras);

//query selector
let selEle = document.querySelector("P");
console.log(selEle);
console.dir(selEle);

let allEle = document.querySelectorAll("P");
console.log(allEle);
console.dir(allEle);

let selElem = document.querySelector(".para");
console.log(selElem);
console.dir(selElem);

let selElement = document.querySelector("#btn");
console.log(selElement);
console.dir(selElement);

console.log(document.body.firstChild);
