import { type IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface MainProdListProps {
  productName: string;
  productIcon: IconProp;
  productLink: string;
}

export default function MainProdList({
  productName,
  productIcon,
  productLink,
}: MainProdListProps) {
  return (
    <li>
      <a
        href={productLink}
        className="flex h-[132px] w-[132px] items-center justify-center rounded-md bg-sky-50 p-4 shadow shadow-slate-300 transition duration-300 hover:bg-sky-100 focus:bg-sky-100 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-100"
      >
        <div>
          <div className="mb-2 text-4xl">
            <FontAwesomeIcon icon={productIcon} />
          </div>

          <p className="xs:text-lg">{productName}</p>
        </div>
      </a>
    </li>
  );
}
