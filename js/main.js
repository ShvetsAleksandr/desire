"use strict"
//slider
const swiper = new Swiper('.swiper', {
	loop: true,
	autoplay: true,
	speed: 800,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

const swipper = new Swiper('.swiper-container', {
	loop: true,
	autoplay: true,
	speed: 1200,
	slidesPerView: 1,
	slidesPerColumn: 2,
	slidesPerColumnFill: "row",
	spaceBetween: 18,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

const swip = new Swiper('.post__swiper', {
	loop: true,
	speed: 800,
	slidesPerView: 1,
	slidesPerColumn: 1,
	slidesPerColumnFill: "row",

	navigation: {
		nextEl: '.post__button-next',
		prevEl: '.post__button-prev',
	},
});
//burger 
const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelectorAll('.header__menu');
if (burger) {
	burger.addEventListener('click', function (event) {
		burger.classList.toggle('header__burger--open');
		headerMenu.forEach(element => {
			element.classList.toggle('header__menu--open');
		});
	});
}
//rightside-menu
const open = document.querySelector('.header__btn');
const close = document.querySelector('.rightside-menu__close');
const rightside_menu = document.querySelector('.rightside-menu');

if (open) {
	open.addEventListener("click", function (event) {
		rightside_menu.classList.add('rightside-menu--active');
	});
}
if (close) {
	close.addEventListener("click", function (event) {
		rightside_menu.classList.remove('rightside-menu--active');
	});
}
//mixitup
const gallery_inner = document.querySelector('.gallery__inner');
if (gallery_inner)
	var mixer = mixitup('.gallery__inner', {
		load: {
			filter: '.living-room'
		}
	});

//animations
document.addEventListener('DOMContentLoaded', () => {
	const scrollItems = document.querySelectorAll('.scroll-item');

	const scrollAnimation = () => {
		let windowCenter = (window.innerHeight / 2) + window.scrollY;
		scrollItems.forEach(el => {
			let scrollOfset = el.offsetTop;

			if (windowCenter >= scrollOfset) {
				el.classList.add('animation-active');
			} else {
				el.classList.remove('animation-active');
			}
		});
	};

	window.addEventListener('scroll', () => {
		scrollAnimation();
	});
});



