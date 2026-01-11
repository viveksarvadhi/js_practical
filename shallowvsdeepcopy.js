//1. main object
const vivek = {
  name: "Vivek",
  marks: { math: 80 }
};
//Shallow Copy (Spread)
const shallow = { ...vivek };

shallow.marks.math = 95;

console.log(vivek.marks.math);   
console.log(shallow.marks.math); 
//Deep Copy (JSON method)
const deep = JSON.parse(JSON.stringify(vivek));

deep.marks.math = 60;

console.log(vivek.marks.math); // 80 ✅ not changed
console.log(deep.marks.math);  // 60
