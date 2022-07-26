import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavMenuMobile from './NavMenuMobile';
import NavMenuDesktop from './NavMenuDesktop';

export default function SemarPageNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navMenuBtnHandler = () => setIsOpen((prevValue) => !prevValue);

  return (
    <nav className="bg-slate-50 shadow shadow-slate-200">
      {/* Navigation Container */}
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Navigation Content */}
          <div className="flex items-center justify-between py-2">
            {/* Navigation Left */}
            <div className="flex items-center justify-center">
              <a
                href="/"
                className="inline-block py-2 transition duration-300 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <img
                  src="/assets/logos/semar-compact-logo.png"
                  alt="Semar - Sistem Embaran Maritim. Kembali ke beranda."
                  className="w-full max-w-[140px] md:max-w-[180px]"
                />
              </a>
            </div>

            {/* Navigation Right (Navigation Mobile Button) */}
            <button
              type="button"
              className="relative left-3 px-3 py-2 text-2xl xs:text-3xl md:hidden"
              onClick={navMenuBtnHandler}
            >
              <FontAwesomeIcon
                icon={faBars}
                aria-hidden="true"
                role="presentation"
              />

              <span className="absolute -left-[9999px]">
                Buka navigasi menu
              </span>
            </button>

            {/* Navigation Right (Navigation Mobile Menu) */}
            <NavMenuMobile
              navMenuBtnHandler={navMenuBtnHandler}
              isOpen={isOpen}
            />

            {/* Navigation Right (Navigation (Tablet | Desktop) Menu) */}
            <NavMenuDesktop />
          </div>
        </div>
      </div>
    </nav>
  );
}
