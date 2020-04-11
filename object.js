let studentA = {
  name: "John",
  age: 18,
  gender: "M",
  married: false
};
// console.log(Object.keys(studentA));
// console.log(Object.values(studentA));
// console.log(studentA.married);

let entrs = Object.entries(studentA);
console.log(entrs);
console.log(Object.fromEntries(entrs));
