// <<< Attempt 1: Works, but crashes >>>
// const range = function(start, end, step) {
//     const arr = [];
//     for (let i = start; i <= end; i += step) {
//       arr.push(i);
//     }
//     return arr;
//   };

// <<< Attempt 2: >>>
const range = function(start, end, step) {
  const arr = [];
  if (start < end && step > 0){
    arr.push(start);
    for (var i = 1; arr[i - 1] + step <= end; i++) {
      arr[i] = arr[i - 1] + step;
    } 
  }
  return arr;
};

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));