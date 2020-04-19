function cook(i1, i2, f) {
  f(i1);
  f(i2);
  console.log(`I make ${i2} ${i1}`);
}

cook("beef", "tomato", i => {
  console.log(`${i} in pot`);
});
