import './AboutUs.css';

import starIcon from '../../assets/star-icon.png';

const AboutUs = () => {
  return (
    <div className='about-us-container'>
      <div className='about-us-background'>
        <img src={starIcon} alt='star' className='about-star-icon' />
        <h1 className='about-us-heading'>About Billionaire Auction</h1>
        <p className='about-us-text'>
          India's premier luxury marketplace connecting discerning buyers with
          exclusive premium items
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
