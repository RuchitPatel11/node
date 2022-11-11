let num1 = parseInt(process.argv[2]);
let operator = process.argv[3];
let num2 = parseInt(process.argv[4]);

function add(a, b) {
  console.log(`Addition of ${a} & ${b} is ${a + b}`);
}
function sub(a, b) {
  console.log(`Subtraction of ${a} & ${b} is ${a - b}`);
}
function mul(a, b) {
  console.log(`Multiplication of ${a} & ${b} is ${a * b}`);
}
function div(a, b) {
  console.log(`Division of ${a} & ${b} is ${a / b}`);
}

switch (operator) {
  case "+":
    add(num1, num2);
    break;

  case "-":
    sub(num1, num2);
    break;

  case "*":
    mul(num1, num2);
    break;

  case "/":
    div(num1, num2);
    break;
}
