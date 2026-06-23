const products = [
{
name:"Laptop",
price:"₹45,999",
rating:"⭐⭐⭐⭐⭐",
image:"https://picsum.photos/300/220?random=1"
},
{
name:"Smartphone",
price:"₹19,999",
rating:"⭐⭐⭐⭐",
image:"https://picsum.photos/300/220?random=2"
},
{
name:"Headphones",
price:"₹2,499",
rating:"⭐⭐⭐⭐⭐",
image:"https://picsum.photos/300/220?random=3"
},
{
name:"Smart Watch",
price:"₹3,999",
rating:"⭐⭐⭐⭐",
image:"https://picsum.photos/300/220?random=4"
},
{
name:"Camera",
price:"₹28,999",
rating:"⭐⭐⭐⭐⭐",
image:"https://picsum.photos/300/220?random=5"
},
{
name:"Tablet",
price:"₹15,999",
rating:"⭐⭐⭐⭐",
image:"https://picsum.photos/300/220?random=6"
},
{
name:"Keyboard",
price:"₹1,499",
rating:"⭐⭐⭐⭐",
image:"https://picsum.photos/300/220?random=7"
},
{
name:"Mouse",
price:"₹799",
rating:"⭐⭐⭐⭐",
image:"https://picsum.photos/300/220?random=8"
},
{
name:"Monitor",
price:"₹12,999",
rating:"⭐⭐⭐⭐⭐",
image:"https://picsum.photos/300/220?random=9"
},
{
name:"Printer",
price:"₹8,999",
rating:"⭐⭐⭐⭐",
image:"https://picsum.photos/300/220?random=10"
},
{
name:"Speaker",
price:"₹2,999",
rating:"⭐⭐⭐⭐",
image:"https://picsum.photos/300/220?random=11"
},
{
name:"SSD",
price:"₹3,499",
rating:"⭐⭐⭐⭐⭐",
image:"https://picsum.photos/300/220?random=12"
},
{
name:"Power Bank",
price:"₹999",
rating:"⭐⭐⭐⭐",
image:"https://picsum.photos/300/220?random=13"
},
{
name:"Router",
price:"₹1,999",
rating:"⭐⭐⭐⭐",
image:"https://picsum.photos/300/220?random=14"
},
{
name:"Pendrive",
price:"₹699",
rating:"⭐⭐⭐⭐",
image:"https://picsum.photos/300/220?random=15"
},
{
name:"Drone",
price:"₹24,999",
rating:"⭐⭐⭐⭐⭐",
image:"https://picsum.photos/300/220?random=16"
},
{
name:"Gaming Chair",
price:"₹9,999",
rating:"⭐⭐⭐⭐",
image:"https://picsum.photos/300/220?random=17"
},
{
name:"Projector",
price:"₹14,999",
rating:"⭐⭐⭐⭐⭐",
image:"https://picsum.photos/300/220?random=18"
},
{
name:"Microphone",
price:"₹1,999",
rating:"⭐⭐⭐⭐",
image:"https://picsum.photos/300/220?random=19"
},
{
name:"Webcam",
price:"₹1,499",
rating:"⭐⭐⭐⭐",
image:"https://picsum.photos/300/220?random=20"
}
];

const container = document.getElementById("products");

if(container){

products.forEach(product => {

container.innerHTML += `
<div class="card">
<img src="${product.image}">
<div class="card-content">
<h3>${product.name}</h3>
<p class="price">${product.price}</p>
<p class="rating">${product.rating}</p>

<div class="buttons">
<button class="cart-btn"
onclick="addToCart('${product.name}')">
Add Cart
</button>

<button class="buy-btn"
onclick="buyNow('${product.name}')">
Buy Now
</button>
</div>
</div>
</div>
`;

});

}

let count =
parseInt(localStorage.getItem("cartCount")) || 0;

const cartCount =
document.getElementById("cartCount");

if(cartCount){
cartCount.innerText = count;
}

function addToCart(name){

count++;

localStorage.setItem("cartCount",count);

if(cartCount){
cartCount.innerText = count;
}

alert(name + " added to cart");
}

function buyNow(name){
alert("Proceeding to buy " + name);
}

const search =
document.getElementById("search");

if(search){

search.addEventListener("keyup",function(){

let value =
this.value.toLowerCase();

let cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

let title =
card.querySelector("h3")
.innerText.toLowerCase();

card.style.display =
title.includes(value)
? "block"
: "none";

});

});

}