const nums = [1, 2, 2, 3, 4, 4];

const uniqueNums = [...new Set(nums)];

console.log(uniqueNums); // [1, 2, 3, 4]

//Simple Real Use: Remove Duplicates from Array

//below Small Set Methods

const s = new Set();

s.add(10);
s.add(20);

console.log(s.has(10)); // true
console.log(s.size);    // 2
