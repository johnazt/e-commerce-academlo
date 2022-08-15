// ================ LOADER =====================//

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
scrollHeader()

/* ================== SHOW PRODUCTS ================= */

function createProductElements() {
	const containerProducts = document.getElementById("products__content");

	items.forEach(item => {
		containerProducts.innerHTML += `
	
			<div class="products__card">
				<div class="products__img-container">
						<img src="${item.image}" alt="product-item">
				</div>
				<div class="products__data">
					<button class="products__btn" ><i class='bx bx-plus'></i>
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

/* ======================== SHOPPING CART ======================= */















// function cartFunctionality() {
// 	const btnProducts = document.querySelectorAll(".products__btn");
// 	const cartList = [];
// 	const cartObj = {};
// 	btnProducts.forEach((btn) => {
// 		btn.addEventListener("click", (e) => {
// 			const id = parseInt(e.target.id); // Se removio parentElement antes de id
// 			const selectProduct = items.find((item) => item.id === id);
// 			cartList.push(selectProduct);

// 			if (cartObj[selectProduct.id]) {
// 				cartObj[selectProduct.id] += 1;
// 				cartObj[selectProduct.price] += selectProduct.price;
// 				cartObj[selectProduct.quantity] -= 1;
// 			} else {
// 				cartObj[selectProduct.id] = 1;
// 				cartObj[selectProduct.price] = selectProduct.price;
// 				cartObj[selectProduct.quantity] = selectProduct.quantity;
// 				cartObj[selectProduct.image] = selectProduct.image;
// 			}

// 			// if ( cartObj['25']  !== cartObj["precio"]) {
// 				// 	Object.defineProperty(o, cartObj["precio"],
// 				// 		Object.getOwnPropertyDescriptor(o, cartObj['25']));
// 				// 	delete o[cartObj['25']];
// 				// }

// 				// cartObj['25'] = cartObj["precio"]
// 				// console.log(cartObj["precio"])
// 				// console.log(cartObj)
// 				// return cartObj
// 				console.log(btnProducts)
// 				console.log(cartObj);
// 				showCards(cartObj);
// 			});
// 		});
// 	}
// 	const cart = document.getElementById("cart");

// 	function showCards(valor) {
// 		let productList = ``;

// 		// const toJson = JSON.stringify(valor);
// 		if (valor["1"] > 0) {
// 			productList += `

// 		<span> Hooddies: ${valor["1"]}</span>
// 		<span>Precio: ${valor["14"]}</span>
// 		<br>
// 		<img class="imagen"  src="${valor["./assets/images/featured1.png"]}"></img><br>
// 		<button  class="products__btn" id="4"><i class='bx bx-plus'></i>
// 		</button>
// 		`;
// 	}
// 	if (valor["2"] > 0) {
// 		productList += `

// 		<span> Shirts: ${valor["2"]}</span>
// 	<span> Precio: ${valor["24"]}</span>
// 	<img class="imagen" src="${valor["./assets/images/featured2.png"]}"></img><br>
// 	<button  class="products__btn" id="2"><i class='bx bx-plus'></i>
// 	</button>
// 		`;
// 	}
// 	if (valor["3"] > 0) {
// 		productList += `

// 		<span>Sweatshirts: ${valor["3"]}</span>
// 	<span>Precio : ${valor["25"]}</span><br>
// 	<img class="imagen" src="${valor["./assets/images/featured3.png"]}"></img>
// 	<button  class="products__btn" id="3" style="position: static"><i class='bx bx-plus'></i>
// 	</button>
// 		`;
// 	}

// 	cart.innerHTML = productList;
// }
// // const cartFunction = cartFunctionality()
