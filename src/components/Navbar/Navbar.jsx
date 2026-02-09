import './Navbar.css';

import { FaAngleDown } from 'react-icons/fa6';
import { PiGlobeBold } from 'react-icons/pi';
import { RxPerson } from 'react-icons/rx';
import { CiMenuBurger } from 'react-icons/ci';

import companyLogo from '../../assets/company-logo.png';
import marketplace from '../../assets/marketplace.png';
import hammer from '../../assets/hammer.png';
import sellNow from '../../assets/sell-now.png';
import toLet from '../../assets/to-let.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-logo-links-container'>
        <img
          src={companyLogo}
          alt='Billionaire Auctions Website'
          className='company-logo'
        />

        <div className='mobile-nav-links-container'>
          <Link to='marketplace'>
            <div className='mobile-nav-link-container'>
              <img
                src={marketplace}
                alt='market place'
                className='mobile-nav-img'
              />
              Marketplace
            </div>
          </Link>
          <Link to='buy-now'>
            <div className='mobile-nav-link-container'>
              <img
                src={sellNow}
                alt='market place'
                className='mobile-nav-img'
              />
              Buy Now
            </div>
          </Link>
          <Link to='auctions'>
            <div className='mobile-nav-link-container'>
              <img src={hammer} alt='market place' className='mobile-nav-img' />
              Auctions
            </div>
          </Link>
          <Link to='to-let'>
            <div className='mobile-nav-link-container'>
              <img src={toLet} alt='market place' className='mobile-nav-img' />
              To-let
            </div>
          </Link>
          <button className='country-btn'>
            <PiGlobeBold className='globe-icon' /> India
          </button>
          <div className='burger-container'>
            <CiMenuBurger />
          </div>
        </div>
        <ul className='nav-links-container'>
          <li>
            <Link to='marketplace'>Marketplace</Link>
          </li>
          <li>
            <Link to='buy-now'>Buy Now</Link>
          </li>
          <li>
            <Link to='auctions'>Auctions</Link>
          </li>
          <li>
            <Link to='to-let'>To Let</Link>
          </li>
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
