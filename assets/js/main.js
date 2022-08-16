// ================ LOADER =====================//

const loader = document.getElementById("loader");

document.addEventListener("DOMContentLoaded", () => {
	load();
});
function load() {
	setTimeout(() => {
		loader.classList.add("hide");
	}, 500);
}

//=============== DARK MODE ================= //

const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", () => {
	document.body.classList.toggle("dark-theme");
	if (themeButton.classList.contains("bx-moon")) {
		themeButton.classList.replace("bx-moon", "bx-sun");
	} else {
		themeButton.classList.replace("bx-sun", "bx-moon");
	}
});

// ==============  RESPONSIVE MENU SHOP CART =============== //

const cartOpen = document.getElementById("cart-shop");
const cartClose = document.getElementById("close-cart");
const cartContainer = document.getElementById("cart-container");

cartOpen.addEventListener("click", () => {
	cartContainer.classList.remove("hide");
});
cartClose.addEventListener("click", () => {
	cartContainer.classList.add("hide");
});

// =================== MENU HAMBURGER ======================//

const navMenu = document.getElementById("navMenu");
const navMenuOpen = document.getElementById("nav-toggle");
const navMenuClose = document.getElementById("menuClose");

navMenuOpen.addEventListener("click", () => {
	navMenu.classList.add("nav--menu__show");
});
navMenuClose.addEventListener("click", () => {
	navMenu.classList.remove("nav--menu__show");
});

// ============= SCROLL HEADER TRANSPARENCY ====================//

function scrollHeader() {
	const header = document.getElementById("header");

	window.addEventListener("scroll", () => {
		if (window.scrollY >= 50) {
			header.classList.add("scroll-header");
		} else {
			header.classList.remove("scroll-header");
		}
	});
}
scrollHeader();

/* ======================== SHOPPING CART ======================= */
//SELECT PRODUCTS
const containerProducts = document.getElementById("products__content");
const cartProduct = document.querySelector(".cart-product");
const itemsTotal = document.getElementById("totalItems");
const priceTotal = document.getElementById("totalPrice");
const counter = document.getElementById("cart-counter");
const productsFilter = document.querySelector(".products__filters");

// CREATE PRODUCTS FILTER

function createFilterProducts() {
	productsFilter.innerHTML = `
		
			<li class="products__item products__line" onclick="filterAll()">
			<h3 class="products__title">
				Show All
			</h3>
			<span class="products__span">
				show all products
			</span>
		</li>
	
		<li class="products__item products__line active-product"
		onclick="filterHoodies()">
			<h3 class="products__title">
				Hoodies
			</h3>
			<span class="products__span">
				3 products
			</span>
		</li>
	
		<li class="products__item products__line" onclick="filterShirts()">
			<h3 class="products__title">
				Shirts
			</h3>
			<span class="products__span">
				4 products
			</span>
		</li>
	
		<li class="products__item" onclick="filterSweatshirts()">
			<h3 class="products__title">
				Sweatshirts
			</h3>
			<span class="products__span">
				4 products
			</span>
		</li>
			`;
}
createFilterProducts();

function filterHoodies(e) {
	console.log(e);
	items.forEach(item => {
		if (item.category === e) {
			containerProducts.innerHTML = `
	
			<div class="products__card">
				<div class="products__img-container">
						<img src="${item.image}" alt="product-item">
				</div>
				<div class="products__data">
					<button class="products__btn" onclick="addToCart(${item.id})"><i class='bx bx-plus'></i>
					</button>
					<div class="products__price">
							$${item.price}.00
					<span class="products__stock">Stock: ${item.quantity}</span>
					</div>
					<h3 class="products__name">
							${item.name}
					</h3>
				</div>
			</div>
		`;
		}
	});
}

// CREATE ELEMENTS PRODUCTS
function createProductElements() {
	items.forEach(item => {
		containerProducts.innerHTML += `
	
			<div class="products__card">
				<div class="products__img-container">
						<img src="${item.image}" alt="product-item">
				</div>
				<div class="products__data">
					<button class="products__btn" onclick="addToCart(${item.id})"><i class='bx bx-plus'></i>
					</button>
					<div class="products__price">
							$${item.price}.00
					<span class="products__stock">Stock: ${item.quantity}</span>
					</div>
					<h3 class="products__name">
							${item.name}
					</h3>
				</div>
			</div>
		`;
	});
}
createProductElements();

// CREATE ARRAY TO STORE OBJECTS
let cart = [];

// ADD OBJECTS TO ARRAY AVOID REPETITION
function addToCart(id) {
	// if some products exist
	if (cart.some(item => item.id === id)) {
		changeNumberUnit("plus", id);
	} else {
		const item = items.find(item => item.id === id);
		//PUSH THE ITEM + A NEW PROPERTY TO COUNT
		cart.push({
			...item,
			numberOfUnits: 1,
		});
	}
	updateCart();
}

// ACTUALIZAMOS LO QUE SE MUESTRA EN EL CARRO
function updateCart() {
	renderCartItems();
	renderSubtotal();
}

// MOSTRAMOS CADA UNO DE LOS ELEMENTOS EN EL CARRO
function renderCartItems() {
	cartProduct.innerHTML = "";

	cart.forEach(item => {
		cartProduct.innerHTML += `
		<div class="container-cart">
		<div class="cart-img"><img src="${item.image}" alt=""></div>
		<div class="cart-info">
		<h3>${item.name}</h3>
		<div class="stock">
		<span class="stock__items">Stock: ${item.quantity}</span>
		<span class="stock__price">$${item.price}.00</span>
		</div>
		<span class="cart-info__subtotal">Subtotal:$${
			item.numberOfUnits * item.price
		}.00</span>
		<div class="cart-btns">
		<button class="cart-btns__btn" onclick="changeNumberUnit('minus', ${
			item.id
		})" >-</button>
		<span>${item.numberOfUnits} Units</span>
		<button class="cart-btns__btn" onclick="changeNumberUnit('plus', ${
			item.id
		})" >+</button>
		<button class="btn-delete" onclick="removeElements(${item.id})" >Del</button>
		</div>
		</div>
		</div>
		
		`;
	});
}

// Elimina elementos del carro de compras
function removeElements(id) {
	cart = cart.filter(item => item.id !== id);
	updateCart();
}

// Cambia el numero de unidades que se muestran
function changeNumberUnit(action, id) {
	cart = cart.map(item => {
		numberOfUnits = item.numberOfUnits;
		if (item.id === id) {
			if (action === "plus" && numberOfUnits < item.quantity) {
				numberOfUnits++;
				// item.stock--;
				// if ( numberOfUnits > item.stock) {
				// 	alert("no units")
				// }
				// console.log(numberOfUnits)
			} else if (action === "minus" && numberOfUnits > 0) {
				numberOfUnits--;
				// item.stock++;
			}
		}

		return {
			...item,
			numberOfUnits,
		};
	});
	updateCart();
}

// Calcula el subtotal y numero total de items
function renderSubtotal() {
	let totalPrice = 0;
	let totalItems = 0;

	cart.forEach(item => {
		totalPrice += item.price * item.numberOfUnits;
		totalItems += item.numberOfUnits;
	});

	itemsTotal.innerHTML = `${totalItems} Items`;
	priceTotal.innerHTML = `$${totalPrice}.00`;
	counter.textContent = totalItems;
}
