import FeaturedListings from '../../components/FeaturedListings/FeaturedListings';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Recommendations from '../../components/Recommendations/Recommendations';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className='home-page-container'>
      <HeroBanner />
      <FeaturedListings />
      <Recommendations />
    </div>
  );
};

export default HomePage;
