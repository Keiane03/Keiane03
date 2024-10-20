'use client'

import SampleReceipt from '../../Components/SampleReceipt';
import React from 'react';

const SampleReceipts: React.FC = () => {
    return (
      <div className="flex items-center justify-center h-screen">
        <SampleReceipt onClose={function (): void {
                throw new Error('Function not implemented.');
            } } />
      </div>
    );
  };
export default SampleReceipts;
