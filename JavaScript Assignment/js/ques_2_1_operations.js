let num1 = prompt("Enter the first number");
num1     = parseInt(num1);

let num2 = prompt("Enter the second number");
num2     = parseInt(num2);

let addition       = "Sum is ";
let subtract       = "Difference is ";
let multiplication = "Product is ";
let division       = "Division is "
console.log(addition + (num1 + num2) + ',' + subtract + (num1 - num2) + 
',' + multiplication + (num1 * num2) + ',' + division + (num1 / num2));
