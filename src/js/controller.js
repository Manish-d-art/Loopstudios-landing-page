import navView from '/src/js/view/navView.js';

const controlNavbar = () => {
	navView.toggleNavbar();
};

const init = () => {
	navView.addHandlerClick(controlNavbar);
};

init();
