//Scope
//Global scope
let age =21;
function stdAge() {
    console.log("age:", age);
}
stdAge();
console.log("age:",age);


//Local Scope (Function Scope)
function stdRollNo() {
    let rollNo = 12;
    console.log("rollNo:",rollNo);
    
}
stdRollNo();


// Block Scope
if (true) {
    let result = "pass";
    console.log(result);
    
}

// Function Scope
function final() {
    let finalMarks = 460;
    console.log(finalMarks);
    if (true) {
        console.log(finalMarks);
    }
   
}
final();

