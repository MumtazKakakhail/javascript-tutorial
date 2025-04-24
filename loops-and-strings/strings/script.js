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


