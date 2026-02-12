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
import HowItWorks from './pages/HowItWorks/HowItWorks';
import Advertise from './pages/Advertise/Advertise';

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
          <Route path='about-us' element={<AboutUs />} />
          <Route path='pricing-plans' element={<PricingPlans />} />
          <Route path='our-services' element={<OurServices />} />
          <Route path='how-it-works' element={<HowItWorks />} />
          <Route path='advertise' element={<Advertise />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
