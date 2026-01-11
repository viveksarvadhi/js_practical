//1. for loop
function vivekForLoopDemo() {
  for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
  }
}
vivekForLoopDemo();
//2. while loop
function vivekWhileLoopDemo() {
  let i = 1;
  while (i <= 3) {
    console.log("While:", i);
    i++;
  }
}
vivekWhileLoopDemo();
//3. for...of (arrays)
function vivekForOfDemo() {
  const skills = ["JS", "React", "Node"];
  for (const skill of skills) {
    console.log(skill);
  }
}
vivekForOfDemo();
//4. for...in (objects)
function vivekForInDemo() {
  const vivek = { role: "Intern", company: "Sarvadhi" };
  for (const key in vivek) {
    console.log(key, vivek[key]);
  }
}
vivekForInDemo();
