import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import LandingPage from './pages/LandingPage/LandingPage';
import Marketplace from './pages/Marketplace/Marketplace';
import BuyNow from './pages/BuyNow/BuyNow';
import Auctions from './pages/Auctions/Auctions';
import ToLet from './pages/ToLet/ToLet';
import AboutUs from './pages/AboutUs/AboutUs';
import PricingPlans from './pages/PricingPlans/PricingPlans';
import OurServices from './pages/OurServices/OurServices';
import HowItWorks from './pages/BuyAndSell/BuyAndSell';
import Advertise from './pages/Advertise/Advertise';
import ContactUs from './pages/ContactUs/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions/TermsConditions';
import RefundPolicy from './pages/RefundPolicy/RefundPolicy';
import MobileFooter from './components/MobileFooter/MobileFooter';
import OurPartners from './pages/OurPartners/OurPartners';
import BuyAndSell from './components/BuyAndSell/BuyAndSell';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route index element={<HomePage />} />
          <Route path='marketplace' element={<Marketplace />} />
          <Route path='buy-now' element={<BuyNow />} />
          <Route path='auctions' element={<Auctions />} />
          <Route path='to-let' element={<ToLet />} />
          <Route path='browse/our-partners' element={<OurPartners />} />
          <Route path='browse/our-services' element={<OurServices />} />
          <Route path='browse/about-us' element={<AboutUs />} />
          <Route path='browse/pricing-plans' element={<PricingPlans />} />
          <Route path='browse/buy-sell' element={<BuyAndSell />} />
          <Route path='browse/advertise' element={<Advertise />} />
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='privacy-policy' element={<PrivacyPolicy />} />
          <Route path='terms-conditions' element={<TermsConditions />} />
          <Route path='refund-policy' element={<RefundPolicy />} />
        </Route>
      </Routes>
      <Footer />
      <MobileFooter />
    </BrowserRouter>
  );
};

export default App;
