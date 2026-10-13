// Assignment 2: Operators, Expressions, and Input Handling

const billInput = prompt("Enter your bill amount:");
const tipInput = prompt("Enter tip percentage:");

const billAmount = Number(billInput);
const tipPercentage = Number(tipInput);

const calculatedTip = billAmount * tipPercentage / 100;
const totalAmount = billAmount + calculatedTip;

console.log(`Subtotal: $${billAmount}`);
console.log(`Tip Percentage: ${tipPercentage}%`);
console.log(`Calculated Tip: $${calculatedTip}`);
console.log(`Total Amount to Pay: $${totalAmount}`);
