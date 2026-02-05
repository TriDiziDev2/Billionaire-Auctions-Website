import './Recommendations.css';

import { FaRegStar } from 'react-icons/fa6';

import { FaAngleLeft } from 'react-icons/fa6';
import { FaAngleRight } from 'react-icons/fa6';
import { BsPatchCheck } from 'react-icons/bs';
import { FaArrowTrendUp } from 'react-icons/fa6';

import table from '../../assets/table.jpg';
import watch from '../../assets/watch.jpg';
import home from '../../assets/home.jpg';
import FeaturedListingsCard from '../FeaturedListingsCard/FeaturedListingsCard';
import RecommendationCard from '../RecommendationCard/RecommendationCard';

const recommendationData = [
  {
    id: 1,
    title: 'Designer Dining Set',
    time: '2 days ago',
    image: table,
    cost: '18,50,000',
    category: 'Furniture',
    location: 'Jaipur',
    icon1: '',
    icon2: <FaArrowTrendUp />,
  },
  {
    id: 2,
    title: 'Patek Philippe Watch',
    time: '1 day ago',
    image: watch,
    cost: '95,00,000',
    category: 'Jewellery & Watches',
    location: 'Mumbai',
    icon1: <BsPatchCheck />,
    icon2: '',
  },
  {
    id: 3,
    title: 'Abstract Art Collection',
    time: '4 days ago',
    image: home,
    cost: '1,20,00,000',
    category: 'Arts & Paintings',
    location: 'Pune',
    icon1: <BsPatchCheck />,
    icon2: <FaArrowTrendUp />,
  },
];

const Recommendations = () => {
  return (
    <div className='recommendations-container'>
      <div className='featured-listings-header'>
        <div className='featured-listings-heading-container'>
          <FaRegStar className='star-icon' />
          <h3 className='featured-listings-heading'>Recommendations</h3>
        </div>
        <div className='featured-listings-arrow-btn-container'>
          <button className='arrow-btn'>
            <FaAngleLeft />
          </button>
          <button className='arrow-btn'>
            <FaAngleRight />
          </button>
        </div>
      </div>
      <div className='featured-listings-grid-container'>
        {recommendationData.map((item) => (
          <RecommendationCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
