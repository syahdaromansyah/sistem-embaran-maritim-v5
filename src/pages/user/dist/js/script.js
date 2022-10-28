/* eslint-disable */
import '../../../../styles/global.css';

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const navProduk = document.querySelector('#nav-produk');
const produk = document.getElementById('produk')
const navprofil = document.querySelector('.navprofil');
const Menuproduk = document.querySelector('.menuproduk');
const peta = document.querySelector('.peta');

hamburger?.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

produk?.addEventListener('click', function () {
  navProduk.classList.toggle('hidden');
});

peta?.addEventListener('click', function () {
  peta?.classList.toggle('hamburger-active');
  Menuproduk?.classList.toggle('hidden');
  navprofil.classList.add('hidden');
});


const profil =  document.querySelector('.profil');

profil?.addEventListener('click', function () {
  navprofil.classList.toggle('hidden');
  Menuproduk?.classList.add('hidden');
  peta?.classList.remove('hamburger-active');
});


const informasi = document.querySelector('#informasi');
const navInformasi = document.querySelector('#nav-informasi');
const closeInformasi = document.querySelector('#close');

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



