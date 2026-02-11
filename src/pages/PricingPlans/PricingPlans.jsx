import './PricingPlans.css';

import { LuStar } from 'react-icons/lu';
import { LuCrown } from 'react-icons/lu';
import { TiFlashOutline } from 'react-icons/ti';
import { BsCurrencyRupee } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa6';

const PricingPlans = () => {
  return (
    <div className='pricing-page-container'>
      <div className='pricing-page-background'>
        <h1 className='pricing-page-heading'>Pricing Plans</h1>
        <p className='pricing-page-text'>
          Choose the perfect plan for your luxury selling needs
        </p>
      </div>
      <div className='pricing-page-grid-container'>
        <div className='pricing-page-grid-item-container'>
          <div className='pricing-page-header'>
            <LuStar className='pricing-star-icon' />
            <h3 className='pricing-heading'>Basic</h3>
            <h3 className='plan-price'>
              <BsCurrencyRupee /> 0
            </h3>
            <p className='pricing-text'>Free Forever</p>
          </div>
          <div className='pricing-list-container'>
            <div className='pricing-list-item-container'>
              <FaCheck className='pricing-check-icon' /> List up to 5 items
            </div>
            <div className='pricing-list-item-container'>
              <FaCheck className='pricing-check-icon' /> Standard verification
            </div>
            <div className='pricing-list-item-container'>
              <FaCheck className='pricing-check-icon' /> Basic support
            </div>
            <div className='pricing-list-item-container'>
              <FaCheck className='pricing-check-icon' /> 5% commission on sales
            </div>
            <div className='pricing-list-item-container'>
              <FaCheck className='pricing-check-icon' /> Standard listing
              visibility
            </div>
          </div>
          <button className='pricing-btn'>Get Started</button>
        </div>
        <div className='pricing-page-grid-item-two-container'>
          <div className='pricing-page-header'>
            <LuCrown className='pricing-crown-icon' />
            <h3 className='pricing-heading'>Premium</h3>
            <h3 className='plan-price'>
              <BsCurrencyRupee /> 4,999
            </h3>
            <p className='pricing-text'>per month</p>
          </div>
          <div className='pricing-list-container'>
            <div className='pricing-list-item-container'>
              <FaCheck className='pricing-check-icon' /> List up to 50 items
            </div>
            <div className='pricing-list-item-container'>
              <FaCheck className='pricing-check-icon' /> Priority verification
            </div>
            <div className='pricing-list-item-container'>
              <FaCheck className='pricing-check-icon' /> Priority support 24/7
            </div>
            <div className='pricing-list-item-container'>
              <FaCheck className='pricing-check-icon' /> 3% commission on sales
            </div>
            <div className='pricing-list-item-container'>
              <FaCheck className='pricing-check-icon' /> Featured listings
            </div>
            <div className='pricing-list-item-container'>
              <FaCheck className='pricing-check-icon' /> Advanced analytics
            </div>
            <div className='pricing-list-item-container'>
              <FaCheck className='pricing-check-icon' /> Professional
              photography
            </div>
          </div>
          <button className='pricing-popular-btn'>Get Started</button>
          <div className='most-poplular-container'>MOST POPULAR</div>
        </div>
        <div className='pricing-page-grid-item-container'>
          <div className='pricing-page-header'>
            <TiFlashOutline className='pricing-star-icon' />
            <h3 className='pricing-heading'>Enterprise</h3>
            <h3 className='plan-price'>
              <BsCurrencyRupee /> 19,999
            </h3>
            <p className='pricing-text'>per month</p>
          </div>
          <div className='pricing-list-container'>
            <div className='pricing-list-item-container'>
              <FaCheck className='pricing-check-icon' /> unlimited listings
            </div>
            <div className='pricing-list-item-container'>
              <FaCheck className='pricing-check-icon' /> Instant verification
            </div>
            <div className='pricing-list-item-container'>
              <FaCheck className='pricing-check-icon' /> Dedicated account
              manager
            </div>
            <div className='pricing-list-item-container'>
              <FaCheck className='pricing-check-icon' /> 2% commission on sales
            </div>
            <div className='pricing-list-item-container'>
              <FaCheck className='pricing-check-icon' /> Premium placement
            </div>
            <div className='pricing-list-item-container'>
              <FaCheck className='pricing-check-icon' /> Custom analytics
              dashboard
            </div>
            <div className='pricing-list-item-container'>
              <FaCheck className='pricing-check-icon' /> Professional
              photography & videography
            </div>
            <div className='pricing-list-item-container'>
              <FaCheck className='pricing-check-icon' /> Marketing support
            </div>
          </div>
          <button className='pricing-btn'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
