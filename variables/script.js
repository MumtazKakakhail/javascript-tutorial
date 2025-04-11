fullName = "shams";
// age = 25;
console.log(fullName);
x = null ;
y = undefined;
console.log(x);
isFollow = true;   //boolean = true or false
console.log(isFollow);
isFollow = false; //boolean = true or false
console.log(isFollow);
//var
 //var = variable name  
var gender = "female"; 
var gender = "shemale"; 
var gender = "male";
console.log(gender);   
//let
let age = 25; //let = variable name
console.log(age);
//const     
const cnicNo = 255655345565; //const = variable name
console.log(cnicNo);

let z = 10; 
z = 20; //reassign value
z = 30; //reassign value
console.log(z);

//as let is a block scope variable, it cannot be redeclared in the same scope
{
    let x = 20; //block scope variable
    console.log(x); 
}

{
    let x = 30; //block scope variable
    console.log(x); 
}