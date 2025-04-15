// Arithmatic Operators
let a = 11;
b = 13;
console.log("a =", a, "& b =", b);

console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);

//Unary operators
let c = 5;
d = 7;
console.log("c =", c, "d =", d);
c++;
console.log("c =", c);
d--;
console.log("d =",d);
++c;
console.log("++c =", ++c);

//Assignment Operators
//= , += , -= , *= , %= , **= , /=
let x = 3;
x += 4;
console.log("x =", x);
x -= 2;
console.log("x =", x);
x *= 5;
console.log("x =", x);
x %= 4;
console.log("x =", x);
x **= 2;
console.log("x =", x);
x /= 4;
console.log("x =", x);

//Comparision Operators
// ==, ===, !=, !===, >, >=, <, <=
let y = 3;
z = 4;
console.log("y == z", y == z);
console.log("y != z", y != z);
console.log("y === z", y === z);
console.log("y !== z", y !== z);
console.log("y > z", y > z);
console.log("y >= z", y >= z);
console.log("y < z", y < z);
console.log("y <= z", y <= z);

let m = 13; 
k = "13";
console.log(typeof m , typeof k);
console.log("m = k", m == k);
console.log("m === k", m === k);
console.log("m != k", m != k);
console.log("m !== k", m !== k);

//Logical Operators
//logical AND &&
//logical OR || 
//logical NOT !
let r = 8;
s = 6;
let cond1 = r > s; //true
let cond2 = r === 8; //true
console.log("cond1 && cond2", cond1 && cond2);
console.log("cond1 || cond2", cond1 || cond2);
console.log("r < s || r === s", r < s || r === 8);
console.log("!(r < s)", !(r < s));
