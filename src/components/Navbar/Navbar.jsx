import './Navbar.css';

import { FaAngleDown } from 'react-icons/fa6';
import { PiGlobeBold } from 'react-icons/pi';
import { RxPerson } from 'react-icons/rx';

import companyLogo from '../../assets/company-logo.png';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-logo-links-container'>
        <img
          src={companyLogo}
          alt='Billionaire Auctions Website'
          className='company-logo'
        />
        <ul className='nav-links-container'>
          <li>Marketplace</li>
          <li>Buy Now</li>
          <li>Auctions</li>
          <li>To-let</li>
          <li className='browse-link'>
            Browse <FaAngleDown />
          </li>
        </ul>
      </div>
      <div className='nav-btns-container'>
        <button className='country-btn'>
          <PiGlobeBold className='globe-icon' /> India
        </button>
        <button className='list-btn'>List/Sell Item</button>
        <button className='login-btn'>
          <RxPerson /> Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
