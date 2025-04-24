//loops
//1- for-loop
for (let i = 1; i <= 5; i++) {
  console.log("hello world!");
}
for (let i = 1; i <= 5; i++) {
  console.log("i =", i);
}

// calculate sum og 1 to 5
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log("sum =", sum);

//while-loop
let i = 1;
while (i <= 5) {
  console.log("i =", i);
  i++;
}

//do-while loop
let count = 1;
do {
  console.log("mumtaz =", count);
  count++;
} while (count < 5);

//for-of loop
let k = "mumtazkakakhail";
for (let val of k) {
  console.log("val=", val);
}

let m = "mumtazkakakhail";
let size = 0;
for (let val of m) {
  console.log("val=", val);
  size++;
}
console.log("size of m =", size);

//for-in loop
let student = {
  name: "Raza",
  class: 12,
  cgpa: 4.5,
  isPass: true,
};
for (let key in student) {
  console.log("key =", key, "value =", student[key]);
}


//practice Question
// 1- print all even numbers from 0 to 100
for (let num = 0; num <= 100; num++) {
  console.log("num", num);
}