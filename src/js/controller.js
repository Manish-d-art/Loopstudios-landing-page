import navView from '/src/js/view/navView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const controlNavbar = () => {
	navView.toggleNavbar();
};

const init = () => {
	navView.addHandlerClick(controlNavbar);
};

init();
