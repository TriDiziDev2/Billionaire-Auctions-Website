import './ToLet.css';

import { FiHome } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';
import { GrFilter } from 'react-icons/gr';
import { BsGrid3X3, BsListNested } from 'react-icons/bs';
import { IoIosList } from 'react-icons/io';
import { BsPatchCheck } from 'react-icons/bs';
import { TbCurrencyRupee } from 'react-icons/tb';

import { LuBuilding } from 'react-icons/lu';
import { CiShop } from 'react-icons/ci';
import { BsBank } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import { LuCrown } from 'react-icons/lu';

import heritage from '../../assets/heritage.jpg';
import apartment from '../../assets/apartment.jpg';
import PropertyCard from '../../components/PropertyCard/PropertyCard';

const categoryData = [
  {
    id: 1,
    icon: <FiHome />,
    title: 'Residential',
    total: '2,450+',
  },
  {
    id: 2,
    icon: <LuBuilding />,
    title: 'Office Spaces',
    total: '680+',
  },
  {
    id: 3,
    icon: <CiShop />,
    title: 'Shops',
    total: '1,230+',
  },
  {
    id: 4,
    icon: <BsBank />,
    title: 'Godowns',
    total: '450+',
  },
  {
    id: 5,
    icon: <GrLocation />,
    title: 'Open Plotsw',
    total: '890+',
  },
  {
    id: 6,
    icon: <LuBuilding />,
    title: 'PGs & Hotels',
    total: '2,420+',
  },
  {
    id: 7,
    icon: <LuCrown />,
    title: 'Luxury Coliving',
    total: '185+',
  },
  {
    id: 8,
    icon: <FiHome />,
    title: 'Others',
    total: '780+',
  },
];

const categoryBtns = [
  {
    id: 1,
    text: '2 BHK',
  },
  {
    id: 2,
    text: '3 BHK',
  },
  {
    id: 3,
    text: '4 BHK',
  },
  {
    id: 4,
    text: '5+ BHK',
  },
  {
    id: 5,
    text: 'Fully Furnished',
  },
  {
    id: 6,
    text: 'Semi Furnished',
  },
  {
    id: 7,
    text: 'Pet Friendly',
  },
  {
    id: 8,
    text: 'With Parking',
  },
];

const propertiesData = [
  {
    id: 1,
    image: apartment,
    cost: '3.5 Lakh/month',
    location: 'Bandra West',
    bhk: '4 BHK',
    tubs: '5 Bath',
    squareFeet: '4,500 sq.ft',
    deposit: '35,00,000',
    available: 'Immediate',
    category: 'Fully Furnished',
    views: '2,340 Views',
    title: 'Luxury 4 BHK Penthouse - Sea View',
  },
  {
    id: 2,
    image: heritage,
    cost: '2.25 Lakh/month',
    location: 'DLF Phase 5',
    bhk: '3 BHK',
    tubs: '4 Bath',
    squareFeet: '3,200 sq.ft',
    deposit: '22,50,000',
    available: 'March 2026',
    category: 'Fully Furnished',
    views: '1,876 Views',
    title: 'Premium 3 BHK Apartment - Golf Course View',
  },
  {
    id: 3,
    image: apartment,
    cost: '5 Lakh/month',
    location: 'Whitefield',
    bhk: '5 BHK',
    tubs: '6 Bath',
    squareFeet: '6000 sq.ft',
    deposit: '50,00,000',
    available: 'Immediate',
    category: 'Semi Furnished',
    views: '3,421 Views',
    title: 'Spacious 5 BHK Villa with Pool',
  },
  {
    id: 4,
    image: heritage,
    cost: '1.85 Lakh/month',
    location: 'Hitech City',
    bhk: '3 BHK',
    tubs: '3 Bath',
    squareFeet: '2,800 sq.ft',
    deposit: '18,50,000',
    available: 'April 2026',
    category: 'Fully Furnished',
    views: '1,654 Views',
    title: 'Designer 3 BHK -Premium Tower',
  },
  {
    id: 5,
    image: apartment,
    cost: '2.75 Lakh /month',
    location: 'Connaught Place',
    bhk: '4 BHK',
    tubs: '5 Bath',
    squareFeet: '3,800 sq.ft',
    deposit: '27,50,000',
    available: 'Immediate',
    category: 'Fully Furnished',
    views: '2,187 Views',
    title: 'Elegant 4 BHK Duplex - City Center',
  },
  {
    id: 6,
    image: heritage,
    cost: '1.25 Lakh/month',
    location: 'Koramangala',
    bhk: '2 BHK',
    tubs: '2 Bath',
    squareFeet: '1,800 sq.ft',
    deposit: '12,50,000',
    available: 'March 2026',
    category: 'Fully Furnished',
    views: '1,432 Views',
    title: 'Modern 2 BHK - High Rise',
  },
  {
    id: 7,
    image: apartment,
    cost: '2.5 Lakh/month',
    location: 'Powai',
    bhk: '4 BHK',
    tubs: '4 Bath',
    squareFeet: '3,500 sq.ft',
    deposit: '25,00,000',
    available: 'Immediate',
    category: 'Semi Furnished',
    views: '1,987 Views',
    title: 'Luxury 4 BHK - Lake View',
  },
  {
    id: 8,
    image: heritage,
    cost: '1.65 Lakh/month',
    location: 'Banjara Hills',
    bhk: '3 BHK',
    tubs: '3 Bath',
    squareFeet: '2,600 sq.ft',
    deposit: '16,50,000',
    available: 'April 2026',
    category: 'Fully Furnished',
    views: '1,543 Views',
    title: 'Premium 3 BHK - Gated Community',
  },
  {
    id: 9,
    image: apartment,
    cost: '6 Lakh/month',
    location: 'Lonavala',
    bhk: '5 BHK',
    tubs: '6 Bath',
    squareFeet: '7,500 sq.ft',
    deposit: '60,00,000',
    available: 'Immediate',
    category: 'Semi Furnished',
    views: '2,876 Views',
    title: 'Exclusive 5 BHK Farmhouse',
  },
  {
    id: 10,
    image: heritage,
    cost: '3 Lakh/month',
    location: 'Candolim',
    bhk: '3 BHK',
    tubs: '4 Bath',
    squareFeet: '3,000 sq.ft',
    deposit: '30,00,000',
    available: 'March 2026',
    category: 'Fully Furnished',
    views: '3,214 Views',
    title: 'Beachfront 3 BHK Villa',
  },
];

const rentsData = [
  {
    id: 1,
    icon: <BsPatchCheck />,
    title: 'Verified Properties',
    text: 'All properties are verified and authentic',
  },
  {
    id: 2,
    icon: <LuCrown />,
    title: 'Luxury Collection',
    text: 'Exclusive premium properties only',
  },
  {
    id: 3,
    icon: <FiHome />,
    title: 'Quick Processing',
    text: 'Fast approval and move-in process',
  },
  {
    id: 4,
    icon: <TbCurrencyRupee />,
    title: 'Transparent Pricing',
    text: 'No hidden charges or fees',
  },
];

const ToLet = () => {
  return (
    <div className='to-let-page-container'>
      <div className='to-let-page-background'>
        <h1 className='to-let-heading'>
          <FiHome className='to-let-home-icon' /> Premium Properties To-Let
        </h1>
        <p className='to-let-text'>
          Find your perfect luxury rental property in India's top cities
        </p>
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
      </div>
      <div className='to-let-page-category-container'>
        <h2 className='to-let-page-category-heading'>Browse by Category</h2>
        <p className='to-let-page-category-text'>
          Find properties based on your requirement
        </p>
        <div className='to-let-page-category-grid-container'>
          {categoryData.map((item) => {
            const { id, icon, title, total } = item;
            return (
              <div className='to-let-grid-item-container' key={id}>
                <div className='to-let-grid-item'>{icon}</div>
                <p className='to-let-grid-item-title'>{title}</p>
                <p className='to-let-grid-item-total'>{total}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='to-let-quick-filters-container'>
        <h3 className='quick-filters-heading'>Quick Filters:</h3>
        {categoryBtns.map((item) => (
          <div className='quick-filters-btn' key={item.id}>
            {item.text}
          </div>
        ))}
      </div>
      <div className='to-let-properties-container'>
        <div className='property-header'>
          <h2 className='property-heading'>Available Properties</h2>
          <p className='property-text'>10 properties found</p>
        </div>
        <div className='property-grid-container'>
          {propertiesData.map((item) => (
            <PropertyCard key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className='to-let-rent-us-container'>
        <h2 className='rent-us-heading'>Why Rent With Us?</h2>
        <p className='rent-us-text'>
          Premium rental experience for luxury properties
        </p>
        <div className='rent-us-grid-container'>
          {rentsData.map((item) => {
            const { id, icon, title, text } = item;
            return (
              <div className='rent-us-grid-item-container' key={id}>
                <div className='rent-us-item-icon-container'>{icon}</div>
                <h3 className='rent-us-item-title'>{title}</h3>
                <p className='rent-us-item-text'>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ToLet;
