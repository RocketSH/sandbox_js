// function calculate(num) {
//   if (num > 1000) {
//     num = num * 0.8;
//   } else if (num > 100) {
//     num = num * 0.85;
//   } else {
//     num = num * 0.9;
//   }
//   return num;
// }

// console.log(calculate(150));

function calculate(num) {
  let discount = 1;
  if (num > 1000) {
    discount = 0.8;
  } else if (num > 100) {
    discount = 0.85;
  } else {
    discount = 0.9;
  }
  return num * discount;
}

console.log(calculate(1200));

// 17:00
