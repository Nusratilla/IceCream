// ---------------Menu---------------
const navMenu = document.querySelector("#nav-menu"),
  navToggle = document.querySelector("#nav-toggle"),
  navClose = document.querySelector("#nav-close"),
  navLink = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

function linkAction() {
  navMenu.classList.remove("show-menu");
}
navLink.forEach((l) => l.addEventListener("click", linkAction));
navClose.addEventListener("click", linkAction);
// ---------------Mood---------------
const iconMoon = document.querySelector(".mood-button");
const darkMode = localStorage.getItem("darkMode");

if (darkMode) document.body.classList.add(darkMode);

iconMoon.addEventListener("click", () => {
  document.body.classList.toggle("second-mood");
  // iconMoon.classList.toggle("bi-sun-fill");
  if (document.body.classList.contains("second-mood")) {
    localStorage.setItem("darkMode", "second-mood");
  } else {
    localStorage.removeItem("darkMode");
  }
});
// ---------------typed animation---------------
const typed = new Typed(".name-input", {
  strings: ["Ice Cream"],
  typeSpeed: 125,
  backSpeed: 80,
  loop: true,
});
// ---------------GSAP ANIMATION---------------
TweenLite.from(".home-title", 1, {
  delay: 0.2,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
TweenLite.from(".home-description", 1, {
  delay: 0.4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
TweenLite.from(".home-liquid", 1, {
  delay: 0.6,
  opacity: 0,
  y: 200,
  ease: Expo.easeInOut,
});
TweenLite.from(".home-milk", 1, {
  delay: 0.9,
  opacity: 0,
  y: 200,
  ease: Expo.easeInOut,
});
TweenLite.from(".home-juice-animate", 1, {
  delay: 1.2,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenLite.from(".home-button", 1, {
  delay: 0.7,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
TweenLite.from(".home-apple1", 1, {
  delay: 0.8,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenLite.from(".home-apple2", 1, {
  delay: 1.1,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenLite.from(".home-leaf:nth-child(6)", 2, {
  delay: 1.3,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenLite.from(".home-leaf:nth-child(5)", 2, {
  delay: 1.5,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenLite.from(".home-leaf:nth-child(4)", 2, {
  delay: 1.7,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenLite.from(".home-leaf:nth-child(3)", 2, {
  delay: 1.8,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenLite.from(".home-leaf:nth-child(2)", 2, {
  delay: 2,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenLite.from(".home-leaf:nth-child(1)", 2, {
  delay: 2.2,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});

// shop-card
let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".product-item");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("#shopping-wrapper");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");
let card = document.querySelector(".card");
// Open&close shoppinglist window.
openShopping.addEventListener("click", () => {
  card.classList.add("open-sale-card");
});
closeShopping.addEventListener("click", () => {
  card.classList.remove("open-sale-card");
});
//  data enter.
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("product-card-slide");
    newDiv.innerHTML = `
               
                  <img src="img/sale/${value.image}" />
                  <div class="product-title">${value.name}</div>
                  <div class="product-price">$${value.price.toLocaleString()}</div>
                  <button onclick="addToCard(${key})">Add To Cart</button>
                `;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card.
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="img/sale/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">&minus;</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">&plus;</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
