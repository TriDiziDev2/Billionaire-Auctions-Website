import { useParams } from 'react-router-dom';
import './ProductPage.css';

import { FiSearch } from 'react-icons/fi';
import { LuCrown } from 'react-icons/lu';
import { IoDiamondOutline } from 'react-icons/io5';
import { BsPatchCheck } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { LuPhone } from 'react-icons/lu';
import { FiMessageCircle } from 'react-icons/fi';
import { MdFavoriteBorder } from 'react-icons/md';
import { SlShare } from 'react-icons/sl';
import { FiFlag } from 'react-icons/fi';
import { CgFileDocument } from 'react-icons/cg';
import { PiCarProfile } from 'react-icons/pi';
import { RiErrorWarningLine } from 'react-icons/ri';
import { FiCheckCircle } from 'react-icons/fi';

import { useState } from 'react';

import car from '../../assets/car4.jpg';
import car2 from '../../assets/car.jpg';

const ProductPage = () => {
  const [selectedBtn, setSelectedBtn] = useState('All');

  const { page, category } = useParams();

  return (
    <div className='product-page-container'>
      <div className='product-page-search-category-container'>
        <div className='product-page-search-btn-container'>
          <div className='product-page-search-container'>
            <FiSearch className='product-search-icon' />
            <input
              type='text'
              placeholder='Search luxury properties, cars, arts, jewelry, watches...'
              className='product-search'
            />
          </div>
          <button className='product-search-btn'>
            <FiSearch /> Search
          </button>
        </div>
        <div className='product-page-breadcrums-category-btns-container'>
          <div className='product-page-bread-crums'>
            Home / {page} / <span className='product-category'>{category}</span>
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
      </div>
      <div className='product-page-image-info-container'>
        <div className='product-page-img-container'>
          <img src={car} alt='car' className='product-car' />
          <div className='product-page-img-grid-container'>
            <img src={car} alt='car' className='grid-img' />
            <img src={car2} alt='car' className='grid-img' />
            <img src={car} alt='car' className='grid-img' />
            <img src={car2} alt='car' className='grid-img' />
          </div>
        </div>
        <div className='product-page-info-container'>
          <div className='product-info-header'>
            <div className='product-info-tags-container'>
              <div className='product-verified-container'>
                <BsPatchCheck className='product-check-icon' /> Verified
              </div>
              <div className='product-luxury-container'>
                <LuCrown className='product-crown-icon' /> CLASSIC
              </div>
            </div>
            <h3 className='product-info-heading'>
              Vintage Rolls Royce Phantom
            </h3>
            <div className='product-location'>
              <GrLocation className='product-location-icon' /> New Delhi, Delhi
            </div>
            <div className='product-calender'>
              <MdOutlineCalendarToday /> Posted on 25 Jan 2026
            </div>
          </div>
          <div className='product-info-price-container'>
            <p className='product-info-text'>Asking Price</p>
            <h2 className='product-info-price'>₹12,50,00,000</h2>
            <p className='product-info-text'>Negotiable</p>
          </div>
          <div className='product-info-btns-container'>
            <button className='product-info-enquire-btn'>
              <LuPhone /> Enquire now
            </button>
            <button className='product-info-chat-btn'>
              <FiMessageCircle /> Chat Now
            </button>
          </div>
          <div className='product-info-social-container'>
            <div className='save-container'>
              <MdFavoriteBorder /> Save
            </div>
            <div className='save-container'>
              <SlShare /> Share
            </div>
            <div className='save-container'>
              <FiFlag /> Report
            </div>
          </div>
        </div>
      </div>
      <div className='product-page-specifications-container'>
        <div className='product-page-specifications'>
          <div className='product-description-container'>
            <h2 className='product-description'>
              <CgFileDocument className='product-document-icon' /> Description
            </h2>
            <p className='product-text'>
              A timeless masterpiece of British automotive engineering. This
              vintage Rolls Royce Phantom represents the golden age of luxury
              motoring. Completely restored to its original glory with authentic
              parts and meticulous attention to detail.
            </p>
          </div>
          <div className='product-description-container'>
            <h2 className='product-description'>
              <PiCarProfile className='product-document-icon' /> Vehicle Details
            </h2>
            <div className='product-grid-item-container'>
              <div className='product-grid-item'>
                <p className='product-brand'>Brand</p>
                <p className='brand-name'>Rolls Royce</p>
              </div>
              <div className='product-grid-item'>
                <p className='product-brand'>Model</p>
                <p className='brand-name'>Phantom</p>
              </div>
              <div className='product-grid-item'>
                <p className='product-brand'>Variant</p>
                <p className='brand-name'>Vintage Edition</p>
              </div>
              <div className='product-grid-item'>
                <p className='product-brand'>Year</p>
                <p className='brand-name'>1965</p>
              </div>
              <div className='product-grid-item'>
                <p className='product-brand'>Fuel Type</p>
                <p className='brand-name'>Petrol</p>
              </div>
              <div className='product-grid-item'>
                <p className='product-brand'>Transmission</p>
                <p className='brand-name'>Automatic</p>
              </div>
              <div className='product-grid-item'>
                <p className='product-brand'>KM Driven</p>
                <p className='brand-name'>45,000 km</p>
              </div>
              <div className='product-grid-item'>
                <p className='product-brand'>Ownership</p>
                <p className='brand-name'>Second Owner</p>
              </div>
              <div className='product-grid-item'>
                <p className='product-brand'>Registration</p>
                <p className='brand-name'>Delhi</p>
              </div>
              <div className='product-grid-item'>
                <p className='product-brand'>Insurance</p>
                <p className='brand-name'>
                  Comprehensive (Valid till Dec 2026)
                </p>
              </div>
            </div>
          </div>
          <div className='product-description-container'>
            <h2 className='product-description'>Engine Specifications</h2>
            <div className='product-grid-item-container'>
              <div className='product-grid-item'>
                <p className='product-brand'>Displacement</p>
                <p className='brand-name'>6,230 cc</p>
              </div>
              <div className='product-grid-item'>
                <p className='product-brand'>Power</p>
                <p className='brand-name'>200 bhp @ 4,000 rpm</p>
              </div>
              <div className='product-grid-item'>
                <p className='product-brand'>Torque</p>
                <p className='brand-name'>480 Nm @ 1,500 rpm</p>
              </div>
              <div className='product-grid-item'>
                <p className='product-brand'>Cylinders</p>
                <p className='brand-name'>V8</p>
              </div>
              <div className='product-grid-item'>
                <p className='product-brand'>Gearbox</p>
                <p className='brand-name'>4-Speed Automatic</p>
              </div>
            </div>
          </div>
        </div>
        <div className='product-page-quick-info-container'>
          <div className='product-page-safety-tips-container'>
            <h3 className='tips-heading'>
              <RiErrorWarningLine className='error-icon' /> Safety Tips
            </h3>
            <div className='product-page-points-container'>
              <div className='product-page-point-container'>
                <FiCheckCircle className='point-circle-icon' /> Always meet
                seller in person at a safe public location
              </div>
              <div className='product-page-point-container'>
                <FiCheckCircle className='point-circle-icon' /> Verify product
                authenticity before payment
              </div>
              <div className='product-page-point-container'>
                <FiCheckCircle className='point-circle-icon' /> Never pay in
                advance or transfer money online
              </div>
              <div className='product-page-point-container'>
                <FiCheckCircle className='point-circle-icon' /> Get proper
                documentation and receipts
              </div>
              <div className='product-page-point-container'>
                <FiCheckCircle className='point-circle-icon' /> Report
                suspicious activity immediately
              </div>
            </div>
          </div>
          <div className='product-quick-information-container'>
            <h3 className='quick-info-heading'>Quick Information</h3>
            <div className='quick-info-justify-container'>
              <span className='quick-category'>Category</span>
              <span className='category-name'>Cars</span>
            </div>
            <div className='quick-info-justify-container'>
              <span className='quick-category'>Listing Type</span>
              <span className='category-name'>Sale</span>
            </div>
            <div className='quick-info-justify-container'>
              <span className='quick-category'>Posted On</span>
              <span className='category-name'>25 Jan 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
