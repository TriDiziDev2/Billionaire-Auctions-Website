import './BuyNow.css';

import { LuShoppingBag } from 'react-icons/lu';
import { TiFlashOutline } from 'react-icons/ti';
import { FiShield } from 'react-icons/fi';
import { BsPatchCheck } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';
import { GrFilter } from 'react-icons/gr';
import { BsGrid3X3 } from 'react-icons/bs';
import { IoIosList } from 'react-icons/io';

import { LuCrown } from 'react-icons/lu';
import { IoDiamondOutline } from 'react-icons/io5';

import { LuHouse } from 'react-icons/lu';
import { LuCar } from 'react-icons/lu';
import { TbSofa } from 'react-icons/tb';
import { MdOutlinePalette } from 'react-icons/md';
import { GoTrophy } from 'react-icons/go';
import { RiBankLine } from 'react-icons/ri';
import { BsBoxSeam } from 'react-icons/bs';

import { useState } from 'react';
import RealEstateComponent from '../../components/RealEstateComponent/RealEstateComponent';

import heritage from '../../assets/heritage.jpg';
import apartment from '../../assets/apartment.jpg';
import car from '../../assets/car.jpg';
import furniture1 from '../../assets/furniture1.jpg';
import furniture2 from '../../assets/furniture2.jpg';
import furniture3 from '../../assets/furniture3.jpg';
import watch from '../../assets/watch.jpg';
import arts from '../../assets/arts.jpg';
import antiques from '../../assets/antiques.jpg';
import collectables from '../../assets/collectables.jpg';
import others from '../../assets/others.jpg';

const btns = [
  {
    id: 0,
    icon: <BsBoxSeam />,
    title: 'All',
    name: 'all',
  },
  {
    id: 1,
    icon: <LuHouse />,
    title: 'Real Estate',
    name: 'realEstate',
  },
  {
    id: 2,
    icon: <LuCar />,
    title: 'Cars',
    name: 'cars',
  },
  {
    id: 3,
    icon: <TbSofa />,
    title: 'Furniture',
    name: 'furniture',
  },
  {
    id: 4,
    icon: <IoDiamondOutline />,
    title: 'Jewellery & Watches',
    name: 'jewellery',
  },
  {
    id: 5,
    icon: <MdOutlinePalette />,
    title: 'Arts & Paintings',
    name: 'arts',
  },
  {
    id: 6,
    icon: <RiBankLine />,
    title: 'Antiques',
    name: 'antiques',
  },
  {
    id: 7,
    icon: <GoTrophy />,
    title: 'Collectables',
    name: 'collectables',
  },
  {
    id: 8,
    icon: <IoIosList />,
    title: 'Others',
    name: 'others',
  },
];

const data = [
  {
    id: 1,
    icon: <TiFlashOutline />,
    title: 'Instant Purchase',
    text: 'Buy immediately',
  },
  {
    id: 2,
    icon: <FiShield />,
    title: 'Secure Payment',
    text: '100% protected',
  },
  {
    id: 3,
    icon: <BsPatchCheck />,
    title: 'Verified Items',
    text: 'Authenticated',
  },
  {
    id: 4,
    icon: <FiTruck />,
    title: 'Fast Delivery',
    text: 'White glove service',
  },
];

const realEstateData = [
  {
    id: 1,
    title: 'Heritage Villa - Gated Community',
    image: apartment,
    cost: '45 Crore',
    location: 'Mumbai, Maharashtra',
    views: '2,340 views',
    category: 'Real Estate',
  },
  {
    id: 2,
    title: 'Beachfront Villa - Goa',
    image: heritage,
    cost: '28.5 Crore',
    location: 'Gurgaon, Haryana',
    views: '1,876 views',
    category: 'Real Estate',
  },
  {
    id: 3,
    title: 'Modern Apartment - City Center',
    image: apartment,
    cost: '18.75 Crore',
    location: 'Goa',
    views: '3,241 views',
    category: 'Real Estate',
  },
];

const carsData = [
  {
    id: 1,
    title: 'Vintage Rolls Royce Phantom',
    image: car,
    cost: '12.5 Crore',
    location: 'New Delhi, Delhi',
    views: '1,892 views',
    category: 'Cars',
  },
  {
    id: 2,
    title: 'Lamborghini Aventador SVJ',
    image: car,
    cost: '8.99 Crore',
    location: 'Bangalore, Karnataka',
    views: '3,145 views',
    category: 'Cars',
  },
  {
    id: 3,
    title: 'Porsche 911 Turbo S',
    image: car,
    cost: '4.25 Crore',
    location: 'Mumbai, Maharashtra',
    views: '2,876 views',
    category: 'Cars',
  },
];

const furnitureData = [
  {
    id: 1,
    title: 'Italian Baroque Hand-Carved Dining Set',
    image: furniture1,
    cost: '45 Lakh',
    location: 'Vasanth Vihar, New Delhi',
    views: '3,420 views',
    category: 'Furniture',
  },
  {
    id: 2,
    title: 'Royal Victorian Bedroom Set - King Size',
    image: furniture2,
    cost: '38.5 Lakh',
    location: 'Jor Bagh, New Delhi',
    views: '2,890 views',
    category: 'Furniture',
  },
  {
    id: 3,
    title: 'French Louis XV Living Room Set',
    image: furniture3,
    cost: '52 Lakh',
    location: 'Boat Club Road, Pune',
    views: '4,120 views',
    category: 'Furniture',
  },
];

const jewelleryData = [
  {
    id: 1,
    title: 'Diamond Necklace - 24 Carat',
    image: watch,
    cost: '8.25 Crore',
    location: 'Hyderabad, Telangana',
    views: '3,201 views',
    category: 'Jewellery & Watches',
  },
  {
    id: 2,
    title: 'Patek Philippe Grand Complication',
    image: watch,
    cost: '6.75 Crore',
    location: 'Mumbai, Maharashtra',
    views: '2,567 views',
    category: 'Jewellery & Watches',
  },
  {
    id: 3,
    title: 'Rolex Daytona - Limited Edition',
    image: watch,
    cost: '95 Lakh',
    location: 'Bangalore, Karnataka',
    views: '2,341 views',
    category: 'Jewellery & Watches',
  },
];

const artsData = [
  {
    id: 1,
    title: 'Original M.F. Husain Paiting',
    image: arts,
    cost: '6.75 Crore',
    location: 'Pune, Maharashtra',
    views: '1,567 views',
    category: 'Arts & Paintings',
  },
  {
    id: 2,
    title: 'Raja Ravi Varma - Limited Print',
    image: arts,
    cost: '45 Lakh',
    location: 'Kochi, Kerala',
    views: '1,234 views',
    category: 'Arts & Paintings',
  },
  {
    id: 3,
    title: 'Contemporary Abstract Art',
    image: arts,
    cost: '85 Lakh',
    location: 'New Delhi, Delhi',
    views: '1,432 views',
    category: 'Arts & Paintings',
  },
];

const antiquesData = [
  {
    id: 1,
    title: 'Antique Persian Rug - 18th Century',
    image: antiques,
    cost: '3.5 Crore',
    location: 'Kolkata, West Bengal',
    views: '987 views',
    category: 'Antiques',
  },
  {
    id: 2,
    title: 'Victorian Era Grandfather Clock',
    image: antiques,
    cost: '75 Lakh',
    location: 'Jaipur, Rajasthan',
    views: '654 views',
    category: 'Antiques',
  },
  {
    id: 3,
    title: 'Antique Bronze Sculpture',
    image: antiques,
    cost: '65 Lakh',
    location: 'Mumbai, Maharashtra',
    views: '1,234 views',
    category: 'Antiques',
  },
];

const collectablesData = [
  {
    id: 1,
    title: 'Rare Vintage Rolex Collection',
    image: collectables,
    cost: '2.25 Crore',
    location: 'Mumbai, Maharashtra',
    views: '1,876 views',
    category: 'Collectables',
  },
  {
    id: 2,
    title: 'Limited Edition Comic Book Set',
    image: collectables,
    cost: '35 Lakh',
    location: 'Bangalore, Karnataka',
    views: '543 views',
    category: 'Collectables',
  },
  {
    id: 3,
    title: 'Rare Stamp Collection - India',
    image: collectables,
    cost: '18.5 Lakh',
    location: 'New Delhi, Delhi',
    views: '987 views',
    category: 'Collectables',
  },
];

const othersData = [
  {
    id: 1,
    title: 'Luxury Yacht - 80 Feet',
    image: others,
    cost: '18 Crore',
    location: 'Goa',
    views: '2,987 views',
    category: 'Others',
  },
  {
    id: 2,
    title: 'Private Jet - Cessna Citation',
    image: others,
    cost: '55 Crore',
    location: 'Mumbai, Maharashtra',
    views: '4,521 views',
    category: 'Others',
  },
  {
    id: 3,
    title: 'Premium Home Theater System',
    image: others,
    cost: '75 Lakh',
    location: 'Bangalore, Karnataka',
    views: '1,543 views',
    category: 'Others',
  },
];

const BuyNow = () => {
  const [selectedBtn, setSelectedBtn] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className='buy-now-container'>
      <div className='buy-now-background-container'>
        <h2 className='buy-now-heading'>
          <LuShoppingBag /> Buy Now
        </h2>
        <p className='buy-now-text'>
          Purchase luxury items instantly - No bidding, No waiting
        </p>
        <div className='buy-now-grid-container'>
          {data.map((item) => {
            const { id, icon, title, text } = item;
            return (
              <div className='buy-now-item-container' key={id}>
                <span className='buy-now-icon'>{icon}</span>
                <h3 className='buy-now-title'>{title}</h3>
                <p className='buy-now-text'>{text}</p>
              </div>
            );
          })}
        </div>
        <div className='buy-now-btns-container'>
          <div
            className={
              selectedBtn === 'All'
                ? 'buy-now-btn-container active-btn'
                : 'buy-now-btn-container'
            }
            onClick={() => setSelectedBtn('All')}
          >
            All
          </div>
          <div
            className={
              selectedBtn === 'Luxury'
                ? 'buy-now-btn-container active-btn'
                : 'buy-now-btn-container'
            }
            onClick={() => setSelectedBtn('Luxury')}
          >
            <LuCrown /> Luxury
          </div>
          <div
            className={
              selectedBtn === 'Classic'
                ? 'buy-now-btn-container active-btn'
                : 'buy-now-btn-container'
            }
            onClick={() => setSelectedBtn('Classic')}
          >
            <IoDiamondOutline /> Classic
          </div>
        </div>
      </div>
      <div className='buy-now-categories-container'>
        <div className='buy-now-search-filter-container'>
          <div className='buy-now-search-container'>
            <IoSearch className='buy-now-search-icon' />
            <input
              type='text'
              placeholder='Search for luxury items...'
              className='buy-now-input'
            />
          </div>
          <div className='buy-now-filter-container'>
            <button className='buy-now-filter-btn'>
              <GrFilter /> Filters
            </button>
            <div className='buy-now-icons-container'>
              <div className='buy-now-grid-icon-container'>
                <BsGrid3X3 />
              </div>
              <div className='buy-now-list-icon-container'>
                <IoIosList />
              </div>
            </div>
          </div>
        </div>
        <div className='buy-now-category-btn-container'>
          {btns.map((item) => {
            const { id, icon, title, name } = item;
            return (
              <div className='buy-now-category-item-container' key={id}>
                <div
                  className={
                    selectedCategory === name
                      ? 'buy-now-category-item-icon-container active-category-btn'
                      : 'buy-now-category-item-icon-container'
                  }
                  onClick={() => setSelectedCategory(name)}
                >
                  {icon}
                </div>
                <p className='buy-now-category-item-title'>{title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <RealEstateComponent data={realEstateData} name='Real Estate' />
      <RealEstateComponent data={carsData} name='Cars' />
      <RealEstateComponent data={furnitureData} name='Furniture' />
      <RealEstateComponent data={jewelleryData} name='Jewellery & Watches' />
      <RealEstateComponent data={artsData} name='Arts & Paintings' />
      <RealEstateComponent data={antiquesData} name='Antiques' />
      <RealEstateComponent data={collectablesData} name='Collectables' />
      <RealEstateComponent data={othersData} name='Others' />
    </div>
  );
};

export default BuyNow;
