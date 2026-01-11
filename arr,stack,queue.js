//1. arr
let arr = [10, 20, 30, 40];
arr[2]; // 30 (O(1))

//2. stack
let stack = [];

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack); // [10, 20, 30]

stack.pop();

console.log(stack); // [10, 20]
//3.Queue
let queue = [];

queue.push(10);   // enqueue
queue.push(20);
queue.push(30);

console.log(queue); // [10, 20, 30]

queue.shift();     // dequeue

console.log(queue); // [20, 30]
