//Conditional Statements
//If Statement
let age = 21;
if (age >= 18) {
  console.log("You can vote");
}
if (age < 18) {
  console.log("You can not vote");
}

// let mode = "dark";
// let color;
// if (mode === "dark") {
//     color = "black";

// }
// if (mode === "light") {
//     color = "white";
// }
// console.log(color);

//If-else Statement
let mode = "light";
let color;
if (mode === "dark") {
  color = "black";
} else {
  color = "white";
}
console.log(color);

let Age = 17;
if (Age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

let num = 6;
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

//else-if statement
let Mode = "blue";
let Color;
if (Mode === "dark") {
  Color = "black";
} else if (Mode === "light") {
  Color = "white";
} else if (Mode === "blue") {
  Color = "blue";
} else {
  Color = "red";
}
console.log(Color);
