//1. reset
function add(...numbers) {
  let sum = 0;
  for (let n of numbers) {
    sum += n;
  }
  return sum;
}

console.log(add(2, 3));        // 5
console.log(add(1, 2, 3, 4));  // 10

//2. spread

const a = [1, 2];
const b = [3, 4];

const total = [...a, ...b];

let sum = 0;
for (let n of total) {
  sum += n;
}

console.log(total); // [1, 2, 3, 4]
console.log(sum);   // 10
