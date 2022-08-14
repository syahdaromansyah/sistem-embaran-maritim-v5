import SemarPageNav from '../../../components/semar-page-nav/Nav';
import SemarPageFooter from '../../../components/semar-page-footer/Footer';
import ContactForm from './ContactForm';

export default function App() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <SemarPageNav />
      </div>

      <main className="bg-semar-logo-bg bg-cover_160% bg-center bg-no-repeat md:bg-cover_100% md:bg-center_t-300px&r-100px xl:bg-center_t-560px&r-100px">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="pt-10 pb-16">
              <div className="mb-6 lg:mb-10">
                <h1 className="mb-2 text-4xl font-bold text-sky-800 lg:text-6xl">
                  Kontak Kami
                </h1>

                <p>
                  Layanan <i>feedback</i> ini dibuat sebagai sarana untuk
                  menyampaikan keluhan, diskusi atau pembuatan akun Semar.
                </p>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <SemarPageFooter />
    </>
  );
}
