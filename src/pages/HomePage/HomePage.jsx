import BillionaireAuction from '../../components/BillionaireAuctions/BillionaireAuction';
import BrowseByCategory from '../../components/BrowseByCategory/BrowseByCategory';
import BuyAndSell from '../../components/BuyAndSell/BuyAndSell';
import FeaturedListings from '../../components/FeaturedListings/FeaturedListings';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import RealEstate from '../../components/RealEstate/RealEstate';
import Recommendations from '../../components/Recommendations/Recommendations';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className='home-page-container'>
      <HeroBanner />
      <FeaturedListings />
      <Recommendations />
      <BrowseByCategory />
      <RealEstate />
      <BillionaireAuction />
      <BuyAndSell />
    </div>
  );
};

export default HomePage;
