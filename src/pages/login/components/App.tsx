import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faUsers } from '@fortawesome/free-solid-svg-icons';
import LoginForm from './LoginForm';

export default function App() {
  return (
    <main className="relative">
      {/* Back to Homepage Link */}
      <div className="absolute top-2 left-2 z-40 md:top-4 md:left-4">
        <a
          href="/"
          className="inline-block rounded-md bg-slate-200 text-4xl shadow shadow-slate-300 transition duration-300 hover:bg-slate-300 focus:bg-slate-300 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-100"
        >
          <div className="flex h-10 w-10 items-center justify-center">
            <FontAwesomeIcon
              icon={faCaretLeft}
              role="presentation"
              aria-hidden="true"
            />
          </div>
        </a>
      </div>

      <div className="h-screen w-full lg:flex">
        <div className="hidden bg-semar-logo-bg bg-center bg-no-repeat lg:flex lg:flex-1 lg:items-center lg:justify-center">
          <div>
            <img
              src="/assets/logos/semar-compact-logo.png"
              alt="Semar - Sistem Embaran Maritim"
              className="w-full max-w-[420px]"
            />
          </div>
        </div>

        <div className="h-full w-full lg:flex-1">
          <div className="container mx-auto h-full w-full px-4">
            <div className="relative flex h-full w-full items-center justify-center">
              {/* Login Form */}
              <div className="w-full md:max-w-md">
                <div className="mb-6 text-center text-6xl">
                  <FontAwesomeIcon
                    icon={faUsers}
                    role="presentation"
                    aria-hidden="true"
                  />
                </div>

                <div className="mb-8">
                  <LoginForm />
                </div>

                <p className="text-center">
                  &copy; BRIN, hak cipta dilindungi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
