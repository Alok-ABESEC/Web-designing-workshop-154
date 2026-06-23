const products = [

{
name:"Laptop",
price:"₹45,999",
rating:"⭐⭐⭐⭐⭐",
image:"https://picsum.photos/300/200?1"
},

{
name:"Smartphone",
price:"₹19,999",
rating:"⭐⭐⭐⭐",
image:"https://picsum.photos/300/200?2"
},

{
name:"Headphones",
price:"₹2,499",
rating:"⭐⭐⭐⭐⭐",
image:"https://picsum.photos/300/200?3"
},

{
name:"Smart Watch",
price:"₹3,999",
rating:"⭐⭐⭐⭐",
image:"https://picsum.photos/300/200?4"
},

{
name:"Camera",
price:"₹28,999",
rating:"⭐⭐⭐⭐⭐",
image:"https://picsum.photos/300/200?5"
},

{
name:"Tablet",
price:"₹15,999",
rating:"⭐⭐⭐⭐",
image:"https://picsum.photos/300/200?6"
},

{
name:"Keyboard",
price:"₹1,499",
rating:"⭐⭐⭐⭐",
image:"https://picsum.photos/300/200?7"
},

{
name:"Mouse",
price:"₹799",
rating:"⭐⭐⭐⭐",
image:"https://picsum.photos/300/200?8"
},

{
name:"Monitor",
price:"₹12,999",
rating:"⭐⭐⭐⭐⭐",
image:"https://picsum.photos/300/200?9"
},

{
name:"Printer",
price:"₹8,999",
rating:"⭐⭐⭐⭐",
image:"https://picsum.photos/300/200?10"
},

{
name:"Speaker",
price:"₹2,999",
rating:"⭐⭐⭐⭐",
image:"https://picsum.photos/300/200?11"
},

{
name:"SSD",
price:"₹3,499",
rating:"⭐⭐⭐⭐⭐",
image:"https://picsum.photos/300/200?12"
},

{
name:"Power Bank",
price:"₹999",
rating:"⭐⭐⭐⭐",
image:"https://picsum.photos/300/200?13"
},

{
name:"Router",
price:"₹1,999",
rating:"⭐⭐⭐⭐",
image:"https://picsum.photos/300/200?14"
},

{
name:"Pendrive",
price:"₹699",
rating:"⭐⭐⭐⭐",
image:"https://picsum.photos/300/200?15"
},

{
name:"Drone",
price:"₹24,999",
rating:"⭐⭐⭐⭐⭐",
image:"https://picsum.photos/300/200?16"
},

{
name:"Gaming Chair",
price:"₹9,999",
rating:"⭐⭐⭐⭐",
image:"https://picsum.photos/300/200?17"
},

{
name:"Projector",
price:"₹14,999",
rating:"⭐⭐⭐⭐⭐",
image:"https://picsum.photos/300/200?18"
},

{
name:"Microphone",
price:"₹1,999",
rating:"⭐⭐⭐⭐",
image:"https://picsum.photos/300/200?19"
},

{
name:"Webcam",
price:"₹1,499",
rating:"⭐⭐⭐⭐",
image:"https://picsum.photos/300/200?20"
}

];

let cart = 0;

const container = document.getElementById("products");

function displayProducts(){

container.innerHTML = "";

products.forEach(product => {

container.innerHTML += `
<div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p class="price">${product.price}</p>

<p class="rating">${product.rating}</p>

<button class="cart-btn"
onclick="addToCart('${product.name}')">
Add To Cart
</button>

<button class="buy-btn"
onclick="buyNow('${product.name}')">
Buy Now
</button>

</div>
`;

});

}

function addToCart(name){

cart++;

document.getElementById("cartCount").innerText = cart;

alert(name + " added to cart");

}

function buyNow(name){

alert("Proceeding to buy " + name);

}

displayProducts();

document.getElementById("search")
.addEventListener("keyup",function(){

let value = this.value.toLowerCase();

let cards =
document.querySelectorAll(".card");

cards.forEach(card => {

let title =
card.querySelector("h3")
.innerText.toLowerCase();

card.style.display =
title.includes(value)
? "block"
: "none";

});

});