export default function bukaInformasiCuaca() {
  const informasi = document.querySelector('#informasi');
  const navInformasi = document.querySelector('#nav-informasi');
  const closeInformasi = document.querySelector('#close');

  informasi?.classList.add('information-active');
  closeInformasi?.classList.remove('hidden');
  navInformasi?.classList.remove('hidden');
}
