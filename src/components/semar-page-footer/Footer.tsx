import FooterRelatedLinks from './FooterRelatedLinks';

export default function SemarPageFooter() {
  return (
    <footer className="bg-sky-100 pt-16 pb-8">
      <div className="container mx-auto px-8">
        <div className="mx-auto max-w-6xl">
          {/* Footer Contact and Address Section */}
          <div className="mb-20 md:flex md:items-start md:justify-between">
            <section className="mb-10 md:mb-0 md:flex-1">
              <h3 className="mb-4 text-xl font-bold">Kontak</h3>
              <address className="not-italic">
                <p>Lapan Pusat</p>
                <p className="mb-2">Jl. Pemuda Persil No. 1</p>
                <p>
                  <strong>Jakarta Timur, POS 13220</strong>
                </p>

                <p>
                  Telepon:
                  <a
                    href="tel:+620214892802"
                    className="underline transition duration-300 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-sky-100"
                  >
                    (021) 489-2802
                  </a>
                  Fax. 4894815
                </p>

                <p>
                  Email:
                  <a
                    href="mailto:humas@lapan.go.id"
                    className="underline transition duration-300 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-sky-100"
                  >
                    humas@lapan.go.id
                  </a>
                </p>
              </address>
            </section>

            {/* Footer Other Links */}
            <section className="mb-10 md:mb-0 md:flex-1">
              <h3 className="mb-4 text-xl font-bold">Tautan Terkait</h3>
              <ul className="grid grid-cols-2 gap-y-2">
                <FooterRelatedLinks />
              </ul>
            </section>

            {/* Footer LAPAN Profile */}
            <section className="mb-10 md:mb-0 md:flex-1">
              <h3 className="mb-4 text-xl font-bold">Profil LAPAN</h3>
              <p>
                Pada tanggal 31 Mei 1962, dibentuk Panitia Astronoutika oleh
                Menteri Pertama RI, Ir. Juanda (selaku Ketua Dewan Penerbangan
                RI) dan R.J. Salatun (selaku Sekretaris Dewan Penerbangan RI).
                Tanggal 22 September 1962, terbentuknya proyek Roket.
              </p>
            </section>
          </div>

          <p className="text-center">&copy; LAPAN. Hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
