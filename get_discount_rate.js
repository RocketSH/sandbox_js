function getDiscountRate(num) {
  if (num > 1000) {
    return 0.8;
  } else if (num > 100) {
    return 0.85;
  } else {
    return 1;
  }
}

function getTaxRate() {
  return 1.05;
}

function calculate(num) {
  return num * getDiscountRate(num) * getTaxRate();
}

console.log(calculate(1200));
