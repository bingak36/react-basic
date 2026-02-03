const fruits = ["apple", "banana", "Orange"];

const [first, second, third] = fruits

console.log(first)
console.log(second)
console.log(third)

const numbers = [1, 2, 3, 4, 5];

const [num1, , num2] = numbers

console.log(num1)
console.log(num2)

const colors = ['red', 'green']
const [color1, color2, color3='blue'] = colors
console.log(color1, color2, color3)