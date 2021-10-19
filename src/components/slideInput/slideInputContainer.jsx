import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TooltipIcon from './tooltipIcon/tooltipIcon';


const SlideInputContainer = ({ headingText, inputType }) => {

  const isThatMoneyInput = inputType === 'rub';

  const depositType = useSelector(state => state.depositDetails.depositType);
  const deposits = useSelector(state => state.depositDetails.deposits);

  const currentParams = deposits.find(item => item.code === depositType).param;

  const minDaysValue = !isThatMoneyInput && currentParams[0].period_from;

  const initialValue = isThatMoneyInput? currentParams[0].summs_and_rate[0].summ_from : currentParams[0].period_from;

  const [value, setValue] = useState(initialValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const innerText = isThatMoneyInput? '₽' : 'дней';

  const tooltipContent = isThatMoneyInput? 2 : 1 ;

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
              step={isThatMoneyInput? 100000 : 1}
              min={isThatMoneyInput? 0 : minDaysValue}
              max={isThatMoneyInput? 99999999999 : 365}
            />
          </Box>
        </div>
        <TooltipIcon symbol={'?'} tooltipContent={tooltipContent}/>
      </div>
    </div>
  );
}

export default SlideInputContainer;