const products = [
  {
    name: "cherry",
    price: 4,
    quantity: 0,
    productId: 101,
    image: "images/cherry.jpg",
  },
  {
    name: "orange",
    price: 3,
    quantity: 0,
    productId: 102,
    image: "images/orange.jpg",
  },
  {
    name: "strawberry",
    price: 10,
    quantity: 0,
    productId: 103,
    image: `images/strawberry.jpg`,
  },
];

let cart = [];

function addProductToCart(productId) {
  // go over objects on products array
  for (const product of products) {
    // find correct product from array
    if (product.productId === productId) {
      // add to product quantity
      increaseQuantity(product.productId);
      // check if product is in the cart array
      if (!cart.includes(product)) {
        // if not, add product to cart array
        cart.push(product);
      }
    }
  }
}

function increaseQuantity(productId) {
  // find product value(product object) with helper function
  let product = findProduct(productId, products);
  // increment quantity by 1 each time the function is called
  product.quantity++;
}

function decreaseQuantity(productId) {
  // find product value(product object) with helper function
  let product = findProduct(productId, products);
  // decrement quantity by 1 each time the function is called
  product.quantity--;
  // check if product quantity is false(value of 0 or less)
  if (!product.quantity) {
    // if product.quantity is false, call removeFromCart() function
    removeProductFromCart(productId);
  }
}

function removeProductFromCart(productId) {
  // find  product index with helper function for splice method
  let productIndex = findIndex(productId, cart);
  // find product value(product object) with helper function
  let product = findProduct(productId, products);
  // reduce quantity of product to 0
  product.quantity = 0;
  // remove 1 item from cart array at the product index
  cart.splice(productIndex, 1);
}

let totalCost = 0;
function cartTotal() {
  totalCost = cart.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );
  return totalCost;
}

// don't know how to test this function, I don't see a "empty cart" button on the front end
function emptyCart() {
  // go  over cart array and reduce quantity of each item to 0
  cart.forEach((product) => {
    removeProductFromCart(product.productId);
  });
}

// I tested this function and it works on the front end, but failing =test script(on line 76 "pay less than the total works")
// please elaborate on why this is failing

let totalAmount = 0;
function pay(amount) {
  totalAmount += amount;
  return totalAmount - cartTotal();
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

function findIndex(productId, arr) {
  for (const index in arr) {
    if (arr[index].productId === productId) {
      return index;
    }
  }
}

function findProduct(productId, arr) {
  for (const item of arr) {
    if (item.productId === productId) {
      return item;
    }
  }
}
/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
};
