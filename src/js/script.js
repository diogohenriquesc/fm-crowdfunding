const navbar = document.querySelector('.navbar');
const navbarBtn = document.querySelector('#hamburger');

navbarBtn.addEventListener('click', navbarBtnClick);

function navbarBtnClick() {
	let isExpanded =  (navbarBtn.getAttribute('aria-expanded') === "true");

	if (!isExpanded) {
		navbar.classList.add('open');
		navbarBtn.setAttribute('aria-expanded', 'true');
	} else {
		navbar.classList.remove('open');
		navbarBtn.setAttribute('aria-expanded', 'false');
	}
	
}