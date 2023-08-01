"use strict";
const sum = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
};

const arr = [1, 2, 3, 4, 5];

console.log(sum(arr));
