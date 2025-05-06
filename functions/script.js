//Function definition
// Function Declaration:
function sayHi() {
  console.log("Hi!");
}
// Function Expression:
const say = function() {
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
const Hi = () => {
  console.log("Hi!");
};


//forEach
let arr = [1,2,3,4,5];
arr.forEach(function printVal(val) {
  console.log(val);
  
})

let Num = [4,65,7845,32,3];
Num.forEach((val)=> {
  console.log(val);
  
})

// const fruits = ["apple", "banana", "cherry"];

// fruits.forEach(function(fruit, i) {
//   console.log(i + ": " + fruit);
// });

const fruits = ["apple", "banana", "cherry"];
fruits.forEach((val) => {
  console.log(val.toUpperCase());
  
})

//practice
//for a given number of arrays, print the square of each value using forEach loop.
let nums = [2,3,5,6,11,13]
nums.forEach((num) => {
  console.log(num**2);
  
})

//map 