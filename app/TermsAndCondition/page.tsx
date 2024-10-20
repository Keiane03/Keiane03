'use client'

import TermsAndConditions from '../../Components/TermsAndCondition';
import React from 'react';

const TermsAndCondition: React.FC = () => {
    return (
      <div className="flex items-center justify-center h-screen">
        <TermsAndConditions onClose={function (): void {
                throw new Error('Function not implemented.');
            } } />
      </div>
    );
  };
export default TermsAndCondition;
