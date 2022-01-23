// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
// Compare the two numbers
// Alert the larger number

let fNumber= prompt("enter the fist number");
let sNumber= prompt("enter the second number");
fNumber=parseInt(fNumber);
sNumber=parseInt(sNumber);
if(fNumber>sNumber){
    alert("larger number is " + fNumber);
}
else{
    alert("larger number is " + sNumber);
}