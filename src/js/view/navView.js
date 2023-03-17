class NavView {
	_menuBtn = document.querySelector('.header__toggle');
	_navLinks = document.querySelector('.header__nav-link-container');

	addHandlerClick(handler) {
		this._menuBtn.addEventListener('click', () => {
			handler();
		});
	}

	toggleNavbar() {
		this._menuBtn.classList.toggle('header__toggle--active');
		this._navLinks.classList.toggle('header__nav-link-container--active');
	}
}

export default new NavView();
