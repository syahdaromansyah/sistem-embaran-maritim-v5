import {
  faCloud,
  faWater,
  faShip,
  faFishFins,
} from '@fortawesome/free-solid-svg-icons';
import MainProdList from './MainProdList';

export default function AppMainProdLists() {
  return (
    <ul className="flex flex-wrap justify-center gap-4 text-center md:justify-start">
      <MainProdList
        productName="Atmosfer"
        productIcon={faCloud}
        productLink="/"
      />
      <MainProdList
        productName="Kelautan"
        productIcon={faWater}
        productLink="/"
      />
      <MainProdList
        productName="Transportasi"
        productIcon={faShip}
        productLink="/"
      />
      <MainProdList
        productName="Nelayan"
        productIcon={faFishFins}
        productLink="/"
      />
    </ul>
  );
}
