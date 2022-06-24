let num1 = parseInt(prompt("Enter first number"))
operator = prompt("Select operation: + , - , / , * ")
let num2 = parseInt(prompt("Enter second number"))


if (operator === "+") {
    alert("Your result is " + (num1 + num2))
} else if (operator == "-") {
    alert("Your result is " + (num1 - num2))
} else if (operator == "/") {
    alert("Your result is " + (num1 / num2))
} else if (operator == "*") {
    alert("Your result is " + (num1 * num2))
} else {
    alert("Invalid operation. Try again")
}