function vivekCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = vivekCounter();
console.log(counter());
console.log(counter());

//it remember outer function value if outer finished 