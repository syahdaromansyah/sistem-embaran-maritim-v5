/* eslint-disable */
import { icon } from 'leaflet';
import '../../../../styles/global.css';
// Toggle navMenu

const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav');
const navMenu = document.querySelector('#nav-menu');
const navProduk = document.querySelector('#nav-produk');
const informasi = document.querySelector('#informasi');
const navInformasi = document.querySelector('#nav-informasi');
const dropdownCheckboxButton = document.querySelector('#dropdownCheckboxButton');
const dropdownCheckboxButton1 = document.querySelector('#dropdownCheckboxButton1');
const dropdownCheckboxButton2 = document.querySelector('#dropdownCheckboxButton2');
const dropdownCheckboxButton3 = document.querySelector('#dropdownCheckboxButton3');
const navPage = document.querySelector('#nav-page');
const closeInformasi = document.querySelector('#close');


nav.addEventListener('click', function () {
  nav.classList.toggle('nav-active');
  navPage.classList.toggle('hidden');
  navMenu.classList.add('hidden');
});

nav.addEventListener('click', function(e) {
  if(e.target !=hamburger && e.target !=navMenu) {
    hamburger.classList.remove('hamburger-active');
  }
});


// nav-menu
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
  navPage.classList.add('hidden');
});

// // nav-user
// nav.addEventListener('click', function () {
//   nav-user.classList.toggle('nav-active');
//   nav-user.classList.toggle('hidden');
// });

// dropdown
dropdownCheckboxButton1.addEventListener('click', function () {
  checkbox.classList.toggle('dropdownCheckboxButton1-active');
  checkbox.classList.toggle('hidden');
});

dropdownCheckboxButton2.addEventListener('click', function () {
  checkbox1.classList.toggle('dropdownCheckboxButton2-active');
  checkbox1.classList.toggle('hidden');
});

dropdownCheckboxButton3.addEventListener('click', function () {
  checkbox2.classList.toggle('dropdownCheckboxButton3-active');
  checkbox2.classList.toggle('hidden');
});

dropdownCheckboxButton4.addEventListener('click', function () {
  checkbox3.classList.toggle('dropdownCheckboxButton4-active');
  checkbox3.classList.toggle('hidden');
});

// nav-produk
// produk.addEventListener('click', function () {
//   navProduk.classList.toggle('hidden');
// });

// nav informasi
informasi.addEventListener('click', function () {
  informasi.classList.toggle('information-active');
  closeInformasi.classList.toggle('hidden');
  navInformasi.classList.toggle('hidden');
});


