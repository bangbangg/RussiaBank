import React from 'react';
import SlideInput from './slideInput';
import TooltipIcon from './tooltipIcon/tooltipIcon';


const SlideInputContainer = () => {

  return (
    <div className='slide-container'>
      <SlideInput />
      <TooltipIcon symbol={'?'} />
    </div>
  );
}

export default SlideInputContainer;