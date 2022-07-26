import { useEffect } from 'react';
import SemarPageNav from '../../components/semar-page-nav/Nav';
import SemarPageFooter from '../../components/semar-page-footer/Footer';
import MainSection from './components/main-sections/MainSection';

export default function App() {
  useEffect(() => {
    document.title = `Semar - Sistem Embaran Maritim`;
  }, []);

  return (
    <>
      <SemarPageNav />
      <MainSection />
      <SemarPageFooter />
    </>
  );
}
