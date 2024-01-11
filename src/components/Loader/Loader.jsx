import React from 'react';
import { Audio } from 'react-loader-spinner'

const LoaderSpin = () => (
  <div className="loader-container">
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  </div>
);

export   {LoaderSpin};