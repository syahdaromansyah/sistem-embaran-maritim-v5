/* eslint-disable */
import '../../../../styles/global.css';
// Toggle navMenu

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const navProduk = document.querySelector('#nav-produk');
const informasi = document.querySelector('#informasi');
const navInformasi = document.querySelector('#nav-informasi');
const closeInformasi = document.querySelector('#close');

// nav-menu
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// nav-produk
produk.addEventListener('click', function () {
  navProduk.classList.toggle('hidden');
});

// nav informasi
informasi.addEventListener('click', function () {
  informasi.classList.toggle('information-active');
  closeInformasi.classList.toggle('hidden');
  navInformasi.classList.toggle('hidden');
});
