// Declaring variables
let cart = [];
const maxCapacity = 7;
let totalPrice = 0;
let freeShippingEligible = false;

// Creating Event listeners and declaring Functions
let addItem = document.querySelector(".add");
addItem.addEventListener("click", function addItem() {
  const itemName = document.querySelector("#itemName").value;
  const itemPrice = parseFloat(document.querySelector("#itemPrice").value);
  if (cart.length < maxCapacity) {
    cart.push({ name: itemName, price: itemPrice });
    totalPrice += itemPrice;
    updateDisplay();
    document.querySelector("#itemName").value = "";
    document.querySelector("#itemPrice").value = "";
  } else {
    displayMessage("Cart is full!");
  }
});

let removeItem = document.querySelector(".remove");
removeItem.addEventListener("click", function removeItem() {
  if (cart.length > 0) {
    const removedItem = cart.pop();
    totalPrice -= removedItem.price;
    updateDisplay();
  } else {
    displayMessage("Cart is empty!");
  }
});

function updateDisplay() {
  document.querySelector(
    "#totalItems"
  ).innerText = `Total Items: ${cart.length}`;
  document.querySelector(
    "#totalPrice"
  ).innerText = `Total Price: $${totalPrice.toFixed(2)}`;
  freeShippingEligible = totalPrice > 50;
  document.querySelector("#freeShipping").innerText = `Free Shipping: ${
    freeShippingEligible ? "Yes" : "No"
  }`;
}

function displayMessage(message) {
  document.querySelector("#message").innerText = message;
}
