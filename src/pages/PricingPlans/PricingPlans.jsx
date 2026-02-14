import './PricingPlans.css';

import { LuStar } from 'react-icons/lu';
import { LuCrown } from 'react-icons/lu';
import { TiFlashOutline } from 'react-icons/ti';
import { BsCurrencyRupee } from 'react-icons/bs';
import { LuShield } from 'react-icons/lu';
import { RxCross2 } from 'react-icons/rx';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { MdCurrencyRupee } from 'react-icons/md';

const advertisementData = [
  {
    id: 1,
    icon: <HiOutlineSpeakerphone />,
    title: 'In Listings Banner',
    cost: '5,999',
  },
  {
    id: 2,
    icon: <HiOutlineSpeakerphone />,
    title: 'Pop-Up Banner',
    cost: '8,999',
  },
  {
    id: 3,
    icon: <HiOutlineSpeakerphone />,
    title: 'HomePage Banner',
    cost: '9,999',
  },
];

const PricingPlans = () => {
  return (
    <div className='pricing-page-container'>
      <div className='pricing-page-background'>
        <h1 className='pricing-page-heading'>Flexible Pricing Plans</h1>
        <p className='pricing-page-text'>
          Choose the perfect plan for your luxury marketplace needs
        </p>
        <p className='pricing-page-text'>
          * Plans applicable for Marketplace, Buy Now, and Auctions. For To-Let:
          Unlimited listings as of now
        </p>
      </div>
      <div className='pricing-page-plans-container'>
        <div className='pricing-page-grid-container'>
          <div className='pricing-page-grid-item-container'>
            <div className='pricing-page-header'>
              <LuStar className='pricing-star-icon' />
              <h3 className='pricing-heading'>Basic</h3>
              <h3 className='plan-price'>
                <BsCurrencyRupee /> 0
              </h3>
              <p className='pricing-text'>Free</p>
            </div>
            <div className='pricing-page-list-container'>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Till Sep 1, 2026</p>
                <span className='pricing-time'>Unlimited</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Till Mar 1, 2027</p>
                <span className='pricing-time'>3 / Month</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>After Mar 1, 2027</p>
                <span className='pricing-time'>1 / Month</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Featured Listings</p>
                <RxCross2 className='cross-icon' />
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Recommended</p>
                <RxCross2 className='cross-icon' />
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Search Visibility</p>
                <span className='pricing-time'>Standard</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Leads</p>
                <span className='pricing-time'>10 / listing</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Support</p>
                <span className='pricing-time'>Email</span>
              </div>
            </div>
            <button className='pricing-btn'>Get Started</button>
          </div>
          <div className='pricing-page-grid-item-container'>
            <div className='pricing-page-header'>
              <LuCrown className='pricing-star-icon' />
              <h3 className='pricing-heading'>Premium</h3>
              <h3 className='plan-price'>
                <BsCurrencyRupee /> 4,999
              </h3>
              <p className='pricing-text'>+ GST</p>
            </div>
            <div className='pricing-page-list-container'>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Till Sep 1, 2026</p>
                <span className='pricing-time'>Unlimited</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Till Mar 1, 2027</p>
                <span className='pricing-time'>3 / Month</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>After Mar 1, 2027</p>
                <span className='pricing-time'>3 / Month</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Featured Listings</p>
                <RxCross2 className='cross-icon' />
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Recommended</p>
                <RxCross2 className='cross-icon' />
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Search Visibility</p>
                <span className='pricing-time'>Medium</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Leads</p>
                <span className='pricing-time'>20 / listing</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Support</p>
                <span className='pricing-time'>Email</span>
              </div>
            </div>
            <button className='pricing-btn'>Get Started</button>
          </div>
          <div className='pricing-page-grid-item-two-container'>
            <div className='pricing-page-header'>
              <TiFlashOutline className='pricing-crown-icon' />
              <h3 className='pricing-heading'>PRO</h3>
              <h3 className='plan-price'>
                <BsCurrencyRupee /> 6,999
              </h3>
              <p className='pricing-text'>+ GST</p>
            </div>
            <div className='pricing-page-list-container'>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Till Sep 1, 2026</p>
                <span className='pricing-time'>Unlimited</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Till Mar 1, 2027</p>
                <span className='pricing-time'>3 / Month</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>After Mar 1, 2027</p>
                <span className='pricing-time'>9 / Month</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Featured Listings</p>
                <span className='pricing-time'>2 Listings</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Recommended</p>
                <span className='pricing-time'>1 Listing</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Search Visibility</p>
                <span className='pricing-time'>High</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Leads</p>
                <span className='pricing-time'>30 / listing</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Support</p>
                <span className='pricing-time'>Priority Line</span>
              </div>
            </div>
            <button className='pricing-popular-btn'>Get Started</button>
            <div className='most-poplular-container'>MOST POPULAR</div>
          </div>
          <div className='pricing-page-grid-item-container'>
            <div className='pricing-page-header'>
              <LuShield className='pricing-star-icon' />
              <h3 className='pricing-heading'>Enterprise</h3>
              <h3 className='plan-price'>
                <BsCurrencyRupee /> 19,999
              </h3>
              <p className='pricing-text'>+ GST</p>
            </div>
            <div className='pricing-page-list-container'>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Till Sep 1, 2026</p>
                <span className='pricing-time'>Unlimited</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Till Mar 1, 2027</p>
                <span className='pricing-time'>3 / Month</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>After Mar 1, 2027</p>
                <span className='pricing-time'>20 / Month</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Featured Listings</p>
                <span className='pricing-time'>5 Listings</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Recommended</p>
                <span className='pricing-time'>3 Listings</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Search Visibility</p>
                <span className='pricing-time'>Maximum</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Leads</p>
                <span className='pricing-time'>40 / listing</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Support</p>
                <span className='pricing-time'>Priority Line</span>
              </div>
            </div>
            <button className='pricing-btn'>Get Started</button>
          </div>
        </div>
      </div>
      <div className='website-advertising-container'>
        <div className='website-advertising-header'>
          <HiOutlineSpeakerphone className='speaker-icon' />
          <h2 className='website-advertising-heading'>
            Website Advertising & Banners
          </h2>
          <p className='website-advertising-text'>
            Maximize your brand visibility with premium advertising placements
          </p>
          <p className='website-advertising-desc'>
            * 4 Ads for each category banner, uploadable through super admin
            panel
          </p>
        </div>
        <div className='website-advertising-grid-container'>
          {advertisementData.map((item) => {
            const { id, icon, title, cost } = item;
            return (
              <div className='website-grid-item-container' key={id}>
                <div className='website-grid-item-icon-container'>{icon}</div>
                <h3 className='website-grid-item-title'>{title}</h3>
                <h2 className='website-grid-item-cost'>
                  <MdCurrencyRupee /> {cost}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
