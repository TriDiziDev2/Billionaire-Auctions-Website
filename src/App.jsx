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
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
