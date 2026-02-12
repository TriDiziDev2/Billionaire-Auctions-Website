import './Footer.css';

import starIcon from '../../assets/star-icon.png';
import { FiFacebook } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { TbBrandTwitter } from 'react-icons/tb';
import { LuLinkedin } from 'react-icons/lu';
import { GrLocation } from 'react-icons/gr';

import { FiPhone } from 'react-icons/fi';
import { MdMailOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-info-links-container'>
        <div className='footer-info-container'>
          <div className='footer-info-header'>
            <img src={starIcon} alt='star' className='footer-star-icon' />
            Billionaire Auction
          </div>
          <p className='footer-info-text'>
            The world's premier marketplace for luxury properties, rare
            collectibles, and exceptional assets.
          </p>
          <div className='footer-icons-container'>
            <div className='footer-icon-container'>
              <FiFacebook />
            </div>
            <div className='footer-icon-container'>
              <FaInstagram />
            </div>
            <div className='footer-icon-container'>
              <TbBrandTwitter />
            </div>
            <div className='footer-icon-container'>
              <LuLinkedin />
            </div>
          </div>
        </div>
        <div className='footer-section-grid-container'>
          <div className='footer-link-container'>
            <h3 className='footer-link-heading'>Quick Links</h3>
            <div className='footer-links'>
              <Link to='about-us'>
                <span>About Us</span>
              </Link>
              <Link to='how-it-works'>
                <span>How It Works</span>
              </Link>
              <Link to='our-services'>
                <span>Our Services</span>
              </Link>
              <Link to='pricing-plans'>
                <span>Pricing Plans</span>
              </Link>
              <Link to='advertise'>
                <span>Advertise</span>
              </Link>
              <span>Contact Us</span>
            </div>
          </div>
          <div className='footer-link-container'>
            <h3 className='footer-link-heading'>Categories</h3>
            <div className='footer-links'>
              <span>Real Estate</span>
              <span>Cars</span>
              <span>Furniture</span>
              <span>Jewellery & Watches</span>
              <span>Arts & Paintings</span>
              <span>Collectables</span>
              <span>Others</span>
            </div>
          </div>
        </div>
        <div className='footer-link-container'>
          <h3 className='footer-link-heading'>Contact Us</h3>
          <div className='footer-contact-info-container'>
            <div className='footer-icon-info-container'>
              <GrLocation className='footer-icons' /> Luxury Plaza, Connaught
              Place, New Delhi - 110001, India
            </div>
          </div>
          <div className='footer-contact-info-container'>
            <div className='footer-icon-info-container'>
              <FiPhone className='footer-icons' /> +91 1800-123-4567
            </div>
          </div>
          <div className='footer-contact-info-container'>
            <div className='footer-icon-info-container'>
              <MdMailOutline className='footer-icons' />{' '}
              contact@billionaireauction.com
            </div>
          </div>
        </div>
      </div>
      <div className='footer-copy-right-container'>
        <p className='footer-copy-right-text'>
          &copy; 2026 Billionaire Auction. All rights reserved.
        </p>
        <div className='footer-section-links-container'>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Refund Policy</span>
          <span>Cancellation Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
