function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Vivek" });
    }, 1000);
  });
}

function getOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Order1", "Order2", "Order3"]);
    }, 1000);
  });
}

function getTotal(orders) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(orders.length * 100); // each order = 100
    }, 1000);
  });
}
async function vivekAsyncTask() {
  console.log("Fetching user...");
  const user = await getUser();
  console.log("User:", user);

  console.log("Fetching orders...");
  const orders = await getOrders(user.id);
  console.log("Orders:", orders);

  console.log("Calculating total...");
  const total = await getTotal(orders);
  console.log("Total Amount:", total);
}

vivekAsyncTask();
