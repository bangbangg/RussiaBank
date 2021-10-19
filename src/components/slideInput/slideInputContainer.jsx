import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TooltipIcon from './tooltipIcon/tooltipIcon';


const SlideInputContainer = ({ headingText, inputType }) => {

  const [value, setValue] = useState(10);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const innerText = inputType === 'rub'? '₽' : 'дней';

  return (
    <div className='slide-container'>
      <h3 className='small-heading'>
        {headingText}
      </h3>
      <div className='slide-container-content'>
        <div className='slide-container__input-field'>
          <div className='slide-container__input-field-info'>
            <span className='slide-input__info-text'>
              {value}
            </span>
            <span className='slide-input__info-text'>
              {innerText}
            </span>
          </div>
          <Box sx={{ width: 472 }}>
            <Slider
              style={{ position: 'absolute', bottom: 0, padding: 0}}
              defaultValue={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={110}
            />
          </Box>
        </div>
        <TooltipIcon symbol={'?'} />
      </div>
    </div>
  );
}

export default SlideInputContainer;