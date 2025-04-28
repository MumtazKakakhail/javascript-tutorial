let str = "hi!";
console.log(str);

let str1 = "hello!";
console.log(str1);
console.log(str1[3]);

//template literal
let template = `hello! this is a string`;
console.log(template);
console.log(typeof template);

let obj = {
    item: "pen",
    price: 10,
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

console.log("the cost of", obj.item, "is", obj.price, "rupees");


//escape character \n => to give next line
console.log("hello\nworld");
console.log("hello\tworld");

let name = "Mumtaz\nWali";
console.log(name.length);


// string methods
// toUpperCase()
let str2 = "hi!";
Str2 = str2.toUpperCase()
console.log(str2);
// toLowerCase()
let str3 = "MUMTAZ!";
str3 = str3.toLowerCase()
console.log(str3);
let str4 = "  MUMTAZ  wali";
console.log(str4.trim());

// slice
let slc = "123243656";
console.log(slc.slice(4,7));

let slc1 = "hello";
console.log(slc1.slice(0,3));


// concat
let name1 = "shahab";
let name2 = "udin";
let result = name1.concat(name2);
console.log(result);

let name3 = "shahab";
let name4 = "udin";
let res = name4.concat(name3);
console.log(res);

let std1 = "ali";
let std2 = "shams";
let student = std1 + std2;
console.log(student);

// replace
let obj2 = "deep";
console.log(obj2.replace("d","j"));

let obj3 = "helplololo";
console.log(obj3.replace("lo","p"));
console.log(obj3.replaceAll("lo","me"));

// charAt
let uni = "NUST";
console.log(uni.charAt(0));




