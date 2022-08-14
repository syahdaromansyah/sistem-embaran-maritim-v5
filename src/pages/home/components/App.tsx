import SemarPageNav from '../../../components/semar-page-nav/Nav';
import SemarPageFooter from '../../../components/semar-page-footer/Footer';
import MainSection from './main-sections/MainSection';

export default function App() {
  return (
    <>
      <div className="sticky top-0">
        <SemarPageNav />
      </div>
      <MainSection />
      <SemarPageFooter />
    </>
  );
}
