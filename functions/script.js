//Function definition
// Function Declaration:
function sayHi() {
  console.log("Hi!");
}
// Function Expression:
const sayHi = function() {
  console.log("Hi!");
};


function myFunction() {
  console.log("Hello!");
}
myFunction();

function hello() {
  console.log("welcome!");
}
hello();
hello();
hello();

function sum(x, y) {
  console.log(4 + 6);
}
sum();


function myMsg(msg) {
  console.log(msg);
  
}
myMsg("I love coading");


function sum(x , y) {
  console.log(x + y);
  
}
sum(11 , 13);


function product(x , y) {
  p = x * y;
  return p;
}
let val = product(7,9);
console.log(val);

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Ali");

//Arrow function
const sayHi = () => {
  console.log("Hi!");
};
