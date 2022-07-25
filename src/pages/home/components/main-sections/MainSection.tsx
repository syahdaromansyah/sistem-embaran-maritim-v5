import MainProdLists from './MainProdLists';

export default function MainSection() {
  return (
    <main className="bg-semar-logo-bg bg-cover_160% bg-center bg-no-repeat md:bg-cover_100% md:bg-center_t-300px&r-100px xl:bg-center_t-560px&r-100px">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="pt-10 pb-20 md:pt-16 lg:pt-20">
            <header className="mb-12 text-center md:text-left">
              <h1 className="mb-2 text-6xl font-bold text-sky-800 lg:text-8xl">
                Semar.
              </h1>
              <p className="mb-6 font-bold lg:text-2xl">
                (Sistem Embaran Maritim)
              </p>

              <p className="mb-6 text-justify lg:mb-8 lg:max-w-4xl">
                Sistem Embaran Maritim atau disingkat dengan Semar merupakan
                sebuah sistem pendukung keputusan terkait keselamatan pelayaran
                dan peningkatan produksi perikanan tangkap. SEMAR merupakan
                prototipe produk kerjasama pengembangan sistem pendukung
                keputusan antara Pusat Sains dan Teknologi Atmosfer (PSTA),
                Pusat Riset Penginderaan Jauh BRIN, Pusat Riset Satelit BRIN,
                Pusat Riset Antariksa BRIN, Pemerintah Provinsi DIY, Kementerian
                Kelautan dan Perikanan (KKP), dan Badan Meteorologi, Geofisika,
                dan Klimatologi (BMKG).
              </p>
            </header>

            <section>
              <h2 className="mb-6 text-center text-xl font-bold md:text-left">
                Produk Kami
              </h2>
            </section>

            <MainProdLists />
          </div>
        </div>
      </div>
    </main>
  );
}
