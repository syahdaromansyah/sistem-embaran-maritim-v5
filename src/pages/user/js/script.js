import '../../../styles/global.css';
// Toggle navMenu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Toggle Produk
const navProduk = document.querySelector('#nav-produk');

// eslint-disable-next-line no-undef
produk.addEventListener('click', () => {
  navProduk.classList.toggle('hidden');
});
