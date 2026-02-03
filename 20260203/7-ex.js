// const color = ['red', 'green']
// const [num1, num2, num3 = 'blue'] = color

// console.log(num3)

// const user = {
//     username: "john_doe",
//     password: "12345"
// }

// const {
//     username:id,
//     password:pw
// } = user;

// console.log(id, pw)

const student = {
  name: "Tom",
  grades: {
    math: 90,
    science: 85
  }
};
const {
    name,
    grades:{math,science}
}=student

console.log(math, science)