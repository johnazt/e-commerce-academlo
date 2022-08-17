// =================== MENU HAMBURGER ======================//
export function menuNav() {
	const navMenu = document.getElementById("navMenu");
	const navMenuOpen = document.getElementById("nav-toggle");
	const navMenuClose = document.getElementById("menuClose");

	navMenuOpen.addEventListener("click", () => {
		navMenu.classList.add("nav--menu__show");
	});
	navMenuClose.addEventListener("click", () => {
		navMenu.classList.remove("nav--menu__show");
	});
}
