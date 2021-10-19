import React, {useState} from 'react';


const TooltipIcon = ({ symbol, tooltipContent }) => {

  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className='tooltip-icon'
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <span className='tooltip-icon__content'>
        {symbol}
      </span>
      {
        isShown &&
        <div>
          <span className='tooltip-icon__popup-arrow' />
          <div className='tooltip-icon__popup'>
            <h3 className='tooltip-icon__popup-heading'>Tooltip {tooltipContent}</h3>
            <p className='tooltip-icon__popup-content'>Text of tooltip {tooltipContent}</p>
          </div>
        </div>
      }
    </div>
  );
}

export default TooltipIcon;