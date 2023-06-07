const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase =  document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");
const cart = document.querySelector("#cart img");
var addToCartButton = document.getElementById('add-to-cart-btn');
var purchaseButton = document.getElementById('purchase-btn');
var cartCountElement = document.getElementById('cart-count');
var cartCount = 0;

container.addEventListener("mousemove", (e)=> {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-360deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
});

container.addEventListener("mouseleave", (e)=> {
    card.style.transition = "all 0.5s ease";
    card.style.transform =  "rotateX(0deg) rotateY(0deg)";

    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});

var sizeButtons = sizes.querySelectorAll("button");
sizeButtons.forEach(function(button) {
    button.addEventListener('click', function () {
        if (button.classList.contains('active')) {
            button.classList.remove('active');
        } else {
            sizeButtons.forEach(function(btn) {
                btn.classList.remove("active");
            });
            button.classList.add("active");
        }
    });
});

addToCartButton.addEventListener('click', function() {
    var selectedSize = sizes.querySelector("button.active");
    if (selectedSize) {
        cartCount++;
        cartCountElement.textContent = cartCount;
    } else {
        alert("Please select a sneaker size! (US)");
    }
});

purchaseButton.addEventListener('click', function() {
    var selectedSize = sizes.querySelector("button.active");
    if (selectedSize) {
        alert("Thank you for purchasing!");
    } else {
        alert("Please select a sneaker size! (US)");
    }
});

cart.addEventListener('click', function() {
    alert("Will redirect to another page if it is implemented. (TODO)");
});
