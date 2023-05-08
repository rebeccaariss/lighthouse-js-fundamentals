// sometimes it really does help to write things out in plain English...
// check array for instances of a given value in a loop, push the value of i to an array for each index position where the value occurs
// arr.length -1: that value will be the index of the last time the value occurs in the passed array.

const lastIndexOf = function(arr, val) {
  const indices = [];
  if (arr.length === 0) {
    return -1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      indices.push(i);
    }
  }
  if (indices.length === 0) {
    return -1;
  }
  return indices[indices.length - 1];
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);