const items = [
	{
		id: 1,
		name: "Hoodies",
		price: 14.0,
		image: "./assets/images/featured1.png",
		category: "hoodies",
		quantity: 10,
	},
	{
		id: 2,
		name: "Shirts",
		price: 24.0,
		image: "./assets/images/featured2.png",
		category: "shirts",
		quantity: 15,
	},
	{
		id: 3,
		name: "Sweatshirts",
		price: 25.0,
		image: "./assets/images/featured3.png",
		category: "sweatshirts",
		quantity: 20,
	},
];

// ================ LOADER ===============//
const loader = document.getElementById("loader");

document.addEventListener("DOMContentLoaded", () => {
	load();
	cartFunctionality();
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

// ==============  CARRITO =============== //
const cartOpen = document.getElementById("cart-shop");
const cartClose = document.getElementById("close-cart");
const cartContainer = document.getElementById("cart-container");
cartOpen.addEventListener("click", () => {
	cartContainer.classList.remove("hide");
});
cartClose.addEventListener("click", () => {
	cartContainer.classList.add("hide");
});
/* =========== MENU CART============ */
function cartFunctionality() {
	const btnProducts = document.querySelectorAll(".products__btn");
	const cartList = [];
	const cartObj = {};
	btnProducts.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			const id = parseInt(e.target.id); // Se removio parentElement antes de id
			const selectProduct = items.find((item) => item.id === id); 
			cartList.push(selectProduct);
			
			// devuelve cantidad y precio de elementos============
			// devuelve la resta de elementos
			
			if (cartObj[selectProduct.id]) {
				cartObj[selectProduct.id] += 1;
				cartObj[selectProduct.price] += selectProduct.price;
				cartObj[selectProduct.quantity] -= 1;
			} else {
				cartObj[selectProduct.id] = 1;
				cartObj[selectProduct.price] = selectProduct.price;
				cartObj[selectProduct.quantity] = selectProduct.quantity;
				cartObj[selectProduct.image] = selectProduct.image;
			}
			
			// if ( cartObj['25']  !== cartObj["precio"]) {
				// 	Object.defineProperty(o, cartObj["precio"],
				// 		Object.getOwnPropertyDescriptor(o, cartObj['25']));
				// 	delete o[cartObj['25']];
				// }
				
				// cartObj['25'] = cartObj["precio"]
				// console.log(cartObj["precio"])
				// console.log(cartObj)
				// return cartObj
				console.log(btnProducts)
				console.log(cartObj);
				showCards(cartObj);
			});
		});
	}
	const cart = document.getElementById("cart");
	
	function showCards(valor) {
		let productList = ``;
		
		// const toJson = JSON.stringify(valor);
		if (valor["1"] > 0) {
			productList += `
	
		<span> Hooddies: ${valor["1"]}</span>
		<span>Precio: ${valor["14"]}</span>
		<br>
		<img class="imagen"  src="${valor["./assets/images/featured1.png"]}"></img><br>
		<button  class="products__btn" id="4"><i class='bx bx-plus'></i>
		</button>
		`;
	}
	if (valor["2"] > 0) {
		productList += `
	
		<span> Shirts: ${valor["2"]}</span>
	<span> Precio: ${valor["24"]}</span>
	<img class="imagen" src="${valor["./assets/images/featured2.png"]}"></img><br>
	<button  class="products__btn" id="2"><i class='bx bx-plus'></i>
	</button>
		`;
	}
	if (valor["3"] > 0) {
		productList += `
	
		<span>Sweatshirts: ${valor["3"]}</span>
	<span>Precio : ${valor["25"]}</span><br>
	<img class="imagen" src="${valor["./assets/images/featured3.png"]}"></img>
	<button  class="products__btn" id="3" style="position: static"><i class='bx bx-plus'></i>
	</button>
		`;
	}

	cart.innerHTML = productList;
}
// const cartFunction = cartFunctionality()

// ============= SCROLL ====================//
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
	if (window.scrollY >= 50) {
		header.classList.add("scroll-header");
	} else {
		header.classList.remove("scroll-header");
	}
});
