import React from 'react';


const TooltipIcon = ({ symbol }) => {

  return (
    <div className='tooltip-icon'>
      <span className='tooltip-icon__content'>
        {symbol}
      </span>
    </div>
  );
}

export default TooltipIcon;