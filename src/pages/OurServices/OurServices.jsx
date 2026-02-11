import './OurServices.css';

import { LuBuilding } from 'react-icons/lu';
import { FiHome } from 'react-icons/fi';
import { LuBanknote } from 'react-icons/lu';
import { RiBankLine } from 'react-icons/ri';
import { LiaBalanceScaleSolid } from 'react-icons/lia';
import { GrPowerCycle } from 'react-icons/gr';

const services = [
  {
    id: 1,
    icon: <LuBuilding />,
    title: 'Real Estate Investments',
    text: 'Expert guidance on luxury real estate investment opportunities across India',
    points: [
      'Investment Advisory',
      'Market Analysis',
      'Portfolio Management',
      'ROI Optimization',
    ],
  },
  {
    id: 2,
    icon: <FiHome />,
    title: 'Sale of Properties in India',
    text: 'Complete support for buying and selling premium properties in India',
    points: [
      'Property Listings',
      'Buyer Matching',
      'Negotiation Support',
      'Transaction Management',
    ],
  },
  {
    id: 3,
    icon: <LuBanknote />,
    title: 'Banking & Loans',
    text: 'Comprehensive banking solutions and loan facilitation for property purchases',
    points: [
      'Home Loan Assistance',
      'Competitive Interest Rates',
      'Quick Approvals',
      'Financial Planning',
    ],
  },
  {
    id: 4,
    icon: <RiBankLine />,
    title: 'NRI/NRO Accounts',
    text: 'Specialized banking services for Non-Resident Indians',
    points: [
      'Account Opening Support',
      'Repatriation Guidance',
      'Tax Compliance',
      'Investment Options',
    ],
  },
  {
    id: 5,
    icon: <LiaBalanceScaleSolid />,
    title: 'Legal Services',
    text: 'Complete legal support for property transactions and compliance',
    points: [
      'Title Verification',
      'Sale Deed Preparation',
      'Legal Documentation',
      'Dispute Resolution',
    ],
  },
  {
    id: 6,
    icon: <GrPowerCycle />,
    title: 'Funds Repatriation',
    text: 'Seamless fund transfer and repatriation services for NRIs',
    points: [
      'FEMA Compliance',
      'RBI Guidelines',
      'Swift Transfers',
      'Tax Documentation',
    ],
  },
];

const OurServices = () => {
  return (
    <div className='our-services-container'>
      <div className='our-services-background'>
        <h1 className='our-services-heading'>Our Services</h1>
        <p className='our-services-text'>
          Comprehensive services designed to make your property investments and
          transactions seamless
        </p>
      </div>
      <div className='our-services-offer-container'>
        <div className='our-services-offer-header'>
          <h2 className='offer-heading'>What We Offer</h2>
          <p className='offer-text'>
            End-to-end solutions for all your real estate and financial needs
          </p>
        </div>
        <div className='our-services-offer-grid-container'>
          {services.map((item) => {
            const { id, icon, title, text, points } = item;
            return (
              <div className='our-services-grid-item-container' key={id}>
                <div className='our-services-grid-item-icon-container'>
                  {icon}
                </div>
                <h3 className='our-services-grid-item-title'>{title}</h3>
                <p className='our-services-grid-item-text'>{text}</p>
                <div className='our-services-points-container'>
                  {points.map((point, index) => (
                    <div className='our-services-point-container' key={index}>
                      <div className='our-services-circle'></div>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='our-services-committe-container'>
        <div className='committe-header'>
          <h2 className='committe-heading'>Our Advisory Committee</h2>
          <p className='committe-text'>
            Experienced professionals dedicated to your success
          </p>
        </div>
        <div className='committe-grid-container'></div>
      </div>
    </div>
  );
};

export default OurServices;
