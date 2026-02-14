import './RealEstate.css';

import { LuHouse } from 'react-icons/lu';
import { FaAngleLeft } from 'react-icons/fa6';
import { FaAngleRight } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';

import heritage from '../../assets/heritage.jpg';
import apartment from '../../assets/apartment.jpg';

import RealEstateCard from '../RealEstateCard/RealEstateCard';

const realEstateData = [
  {
    id: 1,
    title: 'Heritage Villa - Gated Community',
    image: heritage,
    cost: '28,50,00,000',
    city: 'Gurgaon, Haryana',
    location: 'Gurgaon',
  },
  {
    id: 2,
    title: 'Beachfront Villa - Goa',
    image: apartment,
    cost: '18,75,00,000',
    city: 'Goa',
    location: 'Goa',
  },
  {
    id: 3,
    title: 'Modern Apartment - City Center',
    image: apartment,
    cost: '12,50,00,000',
    city: 'Bangalore, Karnataka',
    location: 'Bangalore',
  },
  // {
  //   id: 4,
  //   title: 'Colonial Mansion',
  //   image: apartment,
  //   cost: '35,00,00,000',
  //   city: 'Kolkata, West Bengal',
  //   location: 'Kolkata',
  // },
];

const RealEstate = () => {
  return (
    <div className='real-estate-container'>
      <div className='featured-listings-header'>
        <div className='featured-listings-heading-container'>
          <div className='real-estate-icon-container'>
            <LuHouse />
          </div>
          <div className='real-estate-content-container'>
            <h3 className='featured-listings-heading'>Real Estate</h3>
            <p className='real-estate-text'>5 Products Available</p>
          </div>
        </div>
        <div className='real-estate-arrow-btn-container'>
          <button className='arrow-btn'>
            <FaAngleLeft />
          </button>
          <button className='arrow-btn'>
            <FaAngleRight />
          </button>
          <button className='real-estate-btn'>
            <RxCross2 />
          </button>
        </div>
      </div>
      <div className='real-estate-grid-container'>
        {realEstateData.map((item) => (
          <RealEstateCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default RealEstate;
