let students = ["Mumtaz", "Shahab", "Kamran", "Yasir", "Raza", "Basharat"];
console.log(students);
let marks = [95, 92, 89, 99, 78];
console.log(marks);

// for loop
let fruits = ["mango", "banana", "apple", "orange", "waterlemon", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//for-of
let std = ["atif", "shafiq", "Karamat", "ejaz"];
for (const element of std) {
  console.log(element);
}

let cities = ["Gilgit", "Islamabad", "Lahore", "Karachi"];
for (const city of cities) {
  console.log(city);
}

//Practice questions
let Marks = [60, 45, 74, 55, 67, 52];
let sum = 0;
for (const val of Marks) {
  sum += val;
}
let avg = sum / Marks.length;
console.log(`average marks of class = ${avg}`);

//for a given array with prices of items => [250,645,300,900,50]
//All items have an offer of 10% off on them. change the array to store final price after applying the offer.
let items = [250, 645, 300, 900, 50];
console.log(items);

for (let i = 0; i < items.length; i++) {
  let offer = items[i] / 10;
  items[i] -= offer;
}
console.log(items);

//Array Properties
let fruitItems = ["mango", "banana", "apple", "orange", "waterlemon", "cherry"];
//length
console.log("length =", fruitItems.length);


//Array methods
//push
fruitItems.push("graps");
console.log("push :", fruitItems);

//concat
let newFruitItems = fruitItems.concat(["almond", "pennut"]);
console.log(newFruitItems);

//pop
let lastItem = fruitItems.pop();
console.log("pop:", fruitItems);
console.log(lastItem);

//unshift
let subjects = ["maths", "computer science", "physics", "english", "urdu"];
console.log(subjects);
subjects.unshift("chemistry");
console.log("unshift", subjects);

//shift
let firstElement = subjects.shift();
console.log("shift", subjects);

console.log("removed element", firstElement);

let evenNum = [2, 4, 6, 8, 10];
console.log(evenNum);
console.log(evenNum.toString());
console.log(evenNum);

//slice
console.log("slice", fruitItems);
console.log(fruitItems.slice(2, 4));

//splice
let subject = ["maths", "computer science", "physics", "english", "urdu"];
subject.splice(1, 0, "biology");
console.log("splice", subject);

//find
let alphabets = ["a", "b", "c", "d", "e", "e", "e", "f"];
let findAlphabet = alphabets.find((item) => item === "e");
console.log("find:", findAlphabet);

//filter
let filterAlphabet = alphabets.filter((item) => item === "e");
console.log("filter", filterAlphabet);

