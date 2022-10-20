// eslint-disable no-param-reassign
import '../../../styles/global.css';
import { format } from 'date-fns';

const profil = document.querySelector('.profil');
const navprofil = document.querySelector('.navprofil');

profil.addEventListener('click', () => {
  navprofil.classList.toggle('hidden');
});

document.querySelectorAll('.tanggal').forEach((elementDate) => {
  elementDate.textContent = format(new Date(), 'dd/MM/yyyy');
});

const profileName = document.querySelector('.profile-name');
const profileRole = document.querySelector('.profile-role');

profileName.textContent = window.localStorage.getItem('current-user-name');
profileRole.textContent = window.localStorage.getItem('current-user-role');

const logOutBtn = document.querySelector('.logout-btn');

logOutBtn.addEventListener('click', () => {
  window.localStorage.setItem('current-user-name', '');
  window.localStorage.setItem('current-user-role', '');
  window.localStorage.setItem('current-user-remember', 'false');

  window.location.replace('/');
});

const adminMenuOnly = document.querySelectorAll('.admin-menu-only');
const isAdmin = window.localStorage.getItem('current-user-role');
if (isAdmin.toLowerCase() !== 'admin') {
  adminMenuOnly.forEach((menu) => menu.classList.add('hidden'));
}

const isLogin = window.localStorage.getItem('current-user-name');
if (isLogin === '') {
  window.location.replace('/');
}
