const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello");
  }, 1000);
});

promise.then((msg) => {
  console.log(msg); // Hello (after 1 second)
});
