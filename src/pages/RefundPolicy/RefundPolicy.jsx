import './RefundPolicy.css';

import { LuRefreshCcw } from 'react-icons/lu';
import { LuDollarSign } from 'react-icons/lu';

const RefundPolicy = () => {
  return (
    <div className='privacy-policy-container'>
      <div className='privacy-policy-background'>
        <h1 className='privacy-policy-heading'>
          <LuRefreshCcw className='shield-icon' /> Refund & Cancellation Policy
        </h1>
        <p className='privacy-policy-text'>
          Billionaire Auction is a digital platform providing online services
          such as listings, verification, advertising, and promotional services.
          No physical sales, transactions, or asset exchanges take place at the
          Company's registered or operational address.
        </p>
        <p className='last-updated'>Last updated: January 2026</p>
      </div>
      <div className='privacy-policy-content-container'>
        <h2 className='personal-data-heading'>
          <LuDollarSign className='eye-icon' /> 1. General Refund Policy
        </h2>
        <div className='refund-policy-tag-container'>
          <p className='refund-policy-text'>
            All payments made on Billionaire Auction are final and
            non-refundable, except in limited cases explicitly mentioned in this
            policy.
          </p>
          <p className='refund-policy-desc'>
            Payments are collected strictly for digital services, platform
            access, visibility, verification, advertising, and facilitation
            services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
