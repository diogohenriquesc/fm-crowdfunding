// ** Menu **
const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('.overlay');
const navbarBtn = document.querySelector('#hamburger');
const navbarLinks = document.querySelectorAll('.navbar__item');
const bookmarkBtn = document.querySelector('#bookmark');

navbarBtn.addEventListener('click', navbarBtnClick);
bookmarkBtn.addEventListener('click', bookmarkBtnClick);
overlay.addEventListener('click', closeMenu);

function navbarBtnClick() {
	if (navbar.classList.contains('open')) {
		closeMenu();
	} else {
		openMenu();
	}
}

function closeMenu() {
	navbar.classList.remove('open');
	navbarBtn.setAttribute('aria-expanded', 'true');
	overlay.setAttribute('class', 'overlay overlay--hidden');
	document.body.classList.remove('disable-scroll');
}

function openMenu() {
	navbar.classList.add('open');
	navbarBtn.setAttribute('aria-expanded', 'false');
	overlay.setAttribute('class', 'overlay overlay--modal');
	document.body.classList.add('disable-scroll');
}

navbarLinks.forEach((link) => {
	link.addEventListener('click', closeMenu);
});

// ** Bookmark  **
let isBookmarked = false;

function bookmarkBtnClick() {
	isBookmarked = isBookmarked ? false : true;
	bookmarkBtn.setAttribute('data-bookmarked', isBookmarked);
}
