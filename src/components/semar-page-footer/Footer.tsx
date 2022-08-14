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
                <p>Badan Riset dan Inovasi Nasional</p>
                <p className="mb-2">Jl. Dr. Djunjunan No.133</p>
                <p>
                  <strong>Bandung, POS 40173</strong>
                </p>

                <p>
                  Telepon:{' '}
                  <a
                    href="tel:+620214892802"
                    className="underline transition duration-300 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-sky-100"
                  >
                    (021) 489-2802
                  </a>{' '}
                  Fax. 4894815
                </p>

                <p>
                  Email:
                  <a
                    href="mailto:humas@lapan.go.id"
                    className="underline transition duration-300 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-sky-100"
                  >
                    prima@brin.go.id
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

            {/* Footer BRIN Profile */}
            <section className="mb-10 md:mb-0 md:flex-1">
              <h3 className="mb-4 text-xl font-bold">Profil BRIN</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, adipisci explicabo soluta libero, cupiditate ducimus
                unde excepturi porro ipsum dolorem voluptates placeat
                reprehenderit ipsam fugit, harum minus dignissimos! Ut odio non
                illo soluta aut nam amet deserunt suscipit! Eveniet sit
                praesentium temporibus.
              </p>
            </section>
          </div>

          <p className="text-center font-bold">
            &copy;BRIN. Hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
