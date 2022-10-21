/* eslint-disable */
import { icon } from 'leaflet';
import '../../../../styles/global.css';

const navprofil = document.querySelector('.navprofil');
const Menuproduk = document.querySelector('.menuproduk');
const peta =  document.querySelector('.peta');

peta.addEventListener('click', function () {
  peta.classList.toggle('hamburger-active');
  Menuproduk.classList.toggle('hidden');
  navprofil.classList.add('hidden');
});


const profil =  document.querySelector('.profil');

profil.addEventListener('click', function () {
  navprofil.classList.toggle('hidden');
  Menuproduk.classList.add('hidden');
  peta.classList.remove('hamburger-active');
});


const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav');
const navMenu = document.querySelector('#nav-menu');
const navProduk = document.querySelector('#nav-produk');
const informasi = document.querySelector('#informasi');
const navInformasi = document.querySelector('#nav-informasi');
const navPage = document.querySelector('#nav-page');
const closeInformasi = document.querySelector('#close');
const navData = document.querySelector('#nav-data');
const dropdownCheckboxButton = document.querySelector('#dropdownCheckboxButton');
const dropdownCheckboxButton1 = document.querySelector('#dropdownCheckboxButton1');
const dropdownCheckboxButton2 = document.querySelector('#dropdownCheckboxButton2');
const dropdownCheckboxButton3 = document.querySelector('#dropdownCheckboxButton3');
const icon = document.querySelector('#icon');


nav?.addEventListener('click', function () {
  nav.classList.toggle('nav-active');
  navPage.classList.toggle('hidden');
  navMenu.classList.add('hidden');
});

nav?.addEventListener('click', function(e) {
  if(e.target !=hamburger && e.target !=navMenu) {
    hamburger.classList.remove('hamburger-active');
  }
});


// nav-menu
icon?.addEventListener('click', function () {
  icon.classList.toggle('icon-active');
  navMenu.classList.toggle('hidden');
  navData.classList.add('hidden');
});

// nav-data
hamburger?.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navData.classList.toggle('hidden');
  navMenu.classList.add('hidden');
  dropdown.classList.add('hidden');
  dropdown1.classList.add('hidden');
  dropdown2.classList.add('hidden');
  dropdown3.classList.add('hidden');
});

// klik diluar hamburger
icon?.addEventListener('click', function(e) {
  if(e.target !=hamburger && e.target !=navData) {
      hamburger.classList.remove('hamburger-active');    
  }
});


// dropdown
dropdownCheckboxButton?.addEventListener('click', function () {
  dropdown.classList.toggle('hidden');
  // dropdown3.classList.add('hidden');
  // dropdown2.classList.add('hidden');
  // dropdown1.classList.add('hidden');
});

// dropdown1
dropdownCheckboxButton1?.addEventListener('click', function () {
  dropdown1.classList.toggle('hidden');
  // dropdown.classList.add('hidden');
  // dropdown3.classList.add('hidden');
  // dropdown2.classList.add('hidden');
});

// dropdown2
dropdownCheckboxButton2?.addEventListener('click', function () {
  dropdown2.classList.toggle('hidden');
  // dropdown1.classList.add('hidden');
  // dropdown.classList.add('hidden');
  // dropdown3.classList.add('hidden');
});

// dropdown3
dropdownCheckboxButton3?.addEventListener('click', function () {
  dropdown3.classList.toggle('hidden');
  // dropdown2.classList.add('hidden');
  // dropdown.classList.add('hidden');
  // dropdown1.classList.add('hidden');
});

// nav informasi
informasi?.addEventListener('click', function () {
  informasi.classList.toggle('information-active');
  closeInformasi.classList.toggle('hidden');
  navInformasi.classList.toggle('hidden');
});


const atmosfer = document.querySelector('.atmosfer');
const dataAtmosfer = document.querySelector('.data-atmosfer');

atmosfer?.addEventListener('click', function(){
  dataAtmosfer.classList.toggle('hidden')
});


const kelautan = document.querySelector('.kelautan');
const datakelautan = document.querySelector('.data-kelautan');

kelautan?.addEventListener('click', function() {
  datakelautan.classList.toggle('hidden')
});


const transportasi = document.querySelector('.transportasi');
const dataKapal = document.querySelector('.data-kapal');

transportasi?.addEventListener('click', function() {
  dataKapal.classList.toggle('hidden')
});


const nelayan = document.querySelector('.nelayan');
const dataNelayan = document.querySelector('.data-nelayan');

nelayan?.addEventListener('click', function() {
  dataNelayan.classList.toggle('hidden')
});



