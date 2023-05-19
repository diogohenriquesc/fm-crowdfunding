const navbar = document.querySelector('.navbar');
const navbarBtn = document.querySelector('#hamburger');
const bookmarkBtn = document.querySelector('#bookmark');
let isBookmarked = false;

navbarBtn.addEventListener('click', navbarBtnClick);
bookmarkBtn.addEventListener('click', bookmarkBtnClick);


function navbarBtnClick() {
	let isExpanded = navbarBtn.getAttribute('aria-expanded') === 'true';

	if (!isExpanded) {
		navbar.classList.add('open');
		navbarBtn.setAttribute('aria-expanded', 'true');
	} else {
		navbar.classList.remove('open');
		navbarBtn.setAttribute('aria-expanded', 'false');
	}
}

function bookmarkBtnClick() {
	isBookmarked = isBookmarked ? false : true;
	bookmarkBtn.setAttribute('data-bookmarked', isBookmarked);
}