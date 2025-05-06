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
  
});

// const fruits = ["apple", "banana", "cherry"];

// fruits.forEach(function(fruit, i) {
//   console.log(i + ": " + fruit);
// });

const fruits = ["apple", "banana", "cherry"];
fruits.forEach((val) => {
  console.log(val.toUpperCase());
  
});

//practice
//for a given number of arrays, print the square of each value using forEach loop.
let nums = [2,3,5,6,11,13]
nums.forEach((num) => {
  console.log(num**2);
  
});

//map 
// let marks = [34,43,36,45];
// marks.map((val) => {
//   console.log(val);
  
// });
let marks = [34,43,36,45];
let newMarks = marks.map((val) => {
return val + 10;
  
});
console.log(newMarks);


//reduce 
let Arr = [1,5,6,3,9];
const output = Arr.reduce((prev, curr) => {
  return prev + curr ;
});
console.log(output);


let Res = [4,67,478,2];
let Output = Res.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});
console.log(Output);

let Marks = [67,98,92,63,78,91,82];
const toppers = Marks.filter((val) => {
  return val > 90;
});
console.log(toppers);
