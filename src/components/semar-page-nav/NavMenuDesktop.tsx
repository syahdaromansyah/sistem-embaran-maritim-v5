import { Link } from 'react-router-dom';

export default function SemarPageNavMenu() {
  return (
    <ul className="hidden md:flex md:items-center md:gap-4">
      <li>
        <Link
          to="/login"
          className="inline-block px-4 py-3 transition duration-300 hover:text-sky-400 focus:rounded-none focus:outline-none focus:ring focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Masuk
        </Link>
      </li>

      <li>
        <Link
          to="/contact"
          className="inline-block px-4 py-3 transition duration-300 hover:text-sky-400 focus:rounded-none focus:outline-none focus:ring focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Kontak Kami
        </Link>
      </li>
    </ul>
  );
}
