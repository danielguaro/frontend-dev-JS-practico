const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
// const toggleMenu = () => {
// 	desktopMenu.classList.toggle('inactive');
// };

// menuEmail.addEventListener('click', toggleMenu);

//Otra forma mas resumida
menuEmail.onclick = () => {
	desktopMenu.classList.toggle('inactive');
	cartMenu.classList.add('inactive');
};

// implementar toggle para el menu de mobile
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
burguerMenu.onclick = () => {
	mobileMenu.classList.toggle('inactive');
	cartMenu.classList.add('inactive');
};

// Implementación de toggle para el menu del carrito
const cartMenu = document.querySelector('.product-detail');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
shoppingCart.onclick = () => {
	desktopMenu.classList.add('inactive');
	mobileMenu.classList.add('inactive');
	cartMenu.classList.toggle('inactive');
};

/* Para la implementación de cards-container  clase6*/
const cardsContainer = document.querySelector('.cards-container');
const products = [
	{
		name: 'Bike',
		price: 120,
		image:
			'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	},
	{
		name: 'mobile',
		price: 1200,
		image:
			'https://http2.mlstatic.com/D_NQ_NP_2X_693192-MLA49303777722_032022-F.webp',
	},
	{
		name: 'glasses',
		price: 130,
		image:
			'https://cdn.aarp.net/content/dam/aarp/health/healthy-living/2019/04/1140-sunglasses-esp.jpg',
	},
	{
		name: 'headphones',
		price: 220,
		image:
			'https://panamericana.vteximg.com.br/arquivos/ids/382941-414-317/audifonos-tipo-diadema-gaming-g733-logitech-color-lila-97855157195.jpg?v=637490240597000000',
	},
];
// products.push({
// 	name: 'Bike',
// 	price: 120,
// 	image:
// 		'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
// });

const productsRender = (listArray) => {
	for (let product of listArray) {
		const productCard = document.createElement('div');
		productCard.classList.add('product-card');
		const img = document.createElement('img');
		img.src = product.image;
		const productInfo = document.createElement('div');
		productInfo.classList.add('product-info');
		const simpleDiv = document.createElement('div');
		const firstP = document.createElement('p');
		const secondP = document.createElement('p');
		firstP.innerText = `$ ${product.price}`;
		secondP.innerText = product.name;
		const figure = document.createElement('figure');
		const secondImg = document.createElement('img');
		secondImg.src = './icons/bt_add_to_cart.svg';
		cardsContainer.appendChild(productCard);
		productCard.append(img, productInfo);
		productInfo.append(simpleDiv, figure);
		figure.appendChild(secondImg);
		simpleDiv.append(firstP, secondP);
	}
};

productsRender(products);
