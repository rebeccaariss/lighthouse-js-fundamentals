const isEven  = function (num) {
  return num % 2 === 0;
}

// <<< First example with isEven function: >>>
const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);


//  <<< Second, simplified example: >>>
console.log(isEven(10));
console.log(isEven(11));