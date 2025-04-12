//Data types in JavaScript
//Data types are divided into two categories:
//1. Primitive data types
//Number
let age = 21;
console.log(age);
console.log(typeof age);
//typeof = it tells the data type of the variable
//String
let fullName = "shams";
console.log(fullName);
console.log(typeof fullName);
//Boolean
let isFollow = true; //boolean = true or false
console.log(isFollow);
console.log(typeof isFollow);
//Null
let x = null; //null = no value 
console.log(x);
console.log(typeof x); //object
//Undefined
let y; //undefined = no value
console.log(y);
console.log(typeof y); //undefined
//bigint    
let bigInt = 1234567890123456789012345678901234567890n; //bigint = large number
console.log(bigInt);
console.log(typeof bigInt); //bigint
//Symbol        
let symbol = Symbol("shams"); //symbol = unique value   
console.log(symbol);
console.log(typeof symbol); //symbol

//2. Non-primitive data types
//Object
const student = {
    fullName: "Basharat",
    age: 21,
    rollNo: 12,
    cgpa: 3.5,
    isPass: true,
};
console.log(student);
console.log(student.age); //accessing object property
console.log(student["fullName"]); //accessing object property
console.log(typeof student);
student["age"] = student["age"] + 1;//updating object property
console.log(student.age);
student["fullName"] = "Ali"; //updating object property
console.log(student["fullName"]);