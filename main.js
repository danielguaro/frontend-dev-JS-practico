const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
// const toggleMenu = () => {
// 	desktopMenu.classList.toggle('inactive');
// };

// menuEmail.addEventListener('click', toggleMenu);

//Otra forma mas resumida
menuEmail.onclick = () => {
	desktopMenu.classList.toggle('inactive');
};

// implementar toggle para el menu de mobile
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
burguerMenu.onclick = () => {
	mobileMenu.classList.toggle('inactive');
};
