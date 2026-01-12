const buttonGroup = document.getElementById("button-group");
const shoppingCart = document.getElementById("shopping-cart");
const totalSpan = document.getElementById("total-span");
let total = 0;

buttonGroup.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    const fruit = event.target.dataset.fruit;
    const price = parseFloat(event.target.dataset.price);
    const listItem = document.createElement("div");
    listItem.textContent = `${fruit} - $${price.toFixed(2)}`;
    shoppingCart.appendChild(listItem);
    total += price;
    totalSpan.textContent = total.toFixed(2);
  }
});
