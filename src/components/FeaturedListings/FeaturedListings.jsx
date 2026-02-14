import './FeaturedListings.css';

import { LuCrown } from 'react-icons/lu';
import { FaAngleLeft } from 'react-icons/fa6';
import { FaAngleRight } from 'react-icons/fa6';

import car from '../../assets/car.jpg';
import table from '../../assets/table.jpg';
import watch from '../../assets/watch.jpg';
import home from '../../assets/home.jpg';
import FeaturedListingsCard from '../FeaturedListingsCard/FeaturedListingsCard';

const featuredData = [
  {
    id: 1,
    title: 'Roll Royce Phantom Elite',
    year: '2024',
    time: '5 days ago',
    image: car,
    cost: '12,50,00,000',
    category: 'Cars',
    location: 'Banglore',
  },
  {
    id: 2,
    title: 'Italian Leather Sofa Set',
    year: 'Limited Edition',
    time: '1 week ago',
    image: table,
    cost: '28,50,000',
    category: 'Furniture',
    location: 'New Delhi',
  },
  {
    id: 3,
    title: 'Cartier Diamond Necklace',
    year: '2023 Collection',
    time: '3 days ago',
    image: watch,
    cost: '8,75,00,000',
    category: 'Jewellery & Watches',
    location: 'Hyderabad',
  },
  // {
  //   id: 4,
  //   title: 'Contemporary Art Masterpiece',
  //   year: 'Authenticated',
  //   time: '1 days ago',
  //   image: home,
  //   cost: '2,40,00,000',
  //   category: 'Arts & Paintings',
  //   location: 'Pune',
  // },
];

const FeaturedListings = () => {
  return (
    <div className='featured-listings-container'>
      <div className='featured-listings-header'>
        <div className='featured-listings-heading-container'>
          <LuCrown className='crown-icon' />
          <h3 className='featured-listings-heading'>Featured Listings</h3>
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
        {featuredData.map((item) => (
          <FeaturedListingsCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedListings;
