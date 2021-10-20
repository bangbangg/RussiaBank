import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import TooltipIcon from './tooltipIcon/tooltipIcon';
import { declOfNum } from '../../util/misk';


const MAX_MONEY_COUNT = 99999999999;
const MAX_DAYS_COUNT = 365;

const SlideInputContainer = ({ headingText, value, setValue, currentConditions }) => {

  const depositType = useSelector(state => state.depositDetails.depositType);
  const deposits = useSelector(state => state.depositDetails.deposits);

  const currentParams = deposits.find(item => item.code === depositType).param;

  const maxValue = currentConditions? MAX_MONEY_COUNT : MAX_DAYS_COUNT;
  const minValue = currentConditions? currentConditions[0].summ_from : currentParams[0].period_from;

  const [displayedValue, setDisplayedValue] = useState(value)

  console.log(value);

  useEffect(() => {
    setDisplayedValue(value)
  }, [value])

  const handleChange = (ev) => {
    const currentValue = +`${ev.target.value}`.replace(/[^0-9]/g, '');
    console.log(typeof currentValue);
    if (minValue <= currentValue && maxValue >= currentValue) {
      setValue(currentValue)
    }
    else if (maxValue < currentValue){
      setDisplayedValue(maxValue);
      setValue(maxValue)
    } else {
      setDisplayedValue(currentValue);
    }
  };

  const setValueIfEmpty = (ev) => {
    if (!ev.target.value || ev.target.value < minValue) {
      setValue(minValue);
      setDisplayedValue(minValue)
    }
  }

  const innerText = currentConditions? '₽' : declOfNum(value, ['день', 'дня', 'дней'], false);

  const tooltipContent = currentConditions? 2 : 1 ;

  return (
    <div className='slide-container'>
      <h3 className='small-heading'>
        {headingText}
      </h3>
      <div className='slide-container-content'>
        <div className='slide-container__input-field'>
          <FormControl sx={{ mt: 1.5, width: 472, padding: '0 20px' }}>
            <Input
              value={displayedValue}
              onBlur={setValueIfEmpty}
              onChange={handleChange}
              endAdornment={<InputAdornment position="end">{innerText}</InputAdornment>}
              aria-describedby="standard-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
          </FormControl>
          <Box sx={{ width: 472 }}>
            <Slider
              style={{ position: 'absolute', bottom: 0, padding: 0}}
              defaultValue={value}
              onChange={handleChange}
              value={value}
              valueLabelDisplay="auto"
              step={currentConditions? 100000 : 1}
              min={currentConditions? currentConditions[0].summ_from : currentParams[0].period_from}
              max={currentConditions? MAX_MONEY_COUNT : MAX_DAYS_COUNT}
            />
          </Box>
        </div>
        <TooltipIcon symbol={'?'} tooltipContent={tooltipContent}/>
      </div>
    </div>
  );
}

export default SlideInputContainer;