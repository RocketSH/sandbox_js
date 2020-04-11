let fruits = ["apple", "banana", "cherry", "pear", "watermelon"];

function getFruits(fruits) {
  for (let fruit of fruits) {
    console.log(`I love ${fruit}`);
  }
}

let someFruits = fruits.slice(1, 4);
getFruits(someFruits);

/* Method 2nd */
function selectFruit2nd(params) {
  for (let i = 1; i < params.length - 1; i++) {
    console.log(`I love ${fruits[i]}`);
  }
}
selectFruit2nd(fruits);
