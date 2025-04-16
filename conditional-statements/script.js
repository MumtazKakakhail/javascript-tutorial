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

//practice questions

// alert( "hello");
// prompt("hello!");
// let name = prompt ("hello!");
// console.log(name);

let Num = prompt("Enter a number:");
if (Num % 5 === 0) {
    console.log(Num,"is multiple of 5");
    
} else {
    console.log(Num,"is not multiple of 5");
}


let score = 85;
let grade;
if (score >= 80 && score <= 100) {
    grade = "A+";
} else if (score >= 70 && score <=79) {
    grade = "A";
} else if (score >= 60 && score <= 69) {
    grade = "B";
} else if (score >= 50 && score <= 59) {
    grade = "C";
}
else if (score >= 40 && score <= 49) {
    grade = "D";
}
console.log("According to your score your grade is",grade);
    