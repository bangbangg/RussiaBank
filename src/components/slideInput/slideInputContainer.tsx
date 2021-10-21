import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import TooltipIcon from './tooltipIcon/tooltipIcon';
import { IDepositDetails, ISummsAndRate, stateType } from '../../typesTS/mainTypes';


interface ISlideInputContainer {
  headingText: string,
  value: number,
  setValue: Function,
  currentConditions?: ISummsAndRate[]
}

const MAX_MONEY_COUNT = 99999999999;
const MAX_DAYS_COUNT = 365;

const SlideInputContainer:React.FC<ISlideInputContainer> = ({ headingText, value, setValue, currentConditions }) => {

  const { depositType } = useSelector(({depositDetails}:stateType<IDepositDetails>) => depositDetails);
  const { deposits } = useSelector(({depositDetails}:stateType<IDepositDetails>) => depositDetails);

  const currentParams = deposits.filter(item => item.code === depositType)[0].param;

  const maxValue = currentConditions? MAX_MONEY_COUNT : MAX_DAYS_COUNT;
  const minValue = currentConditions ? currentConditions[0].summ_from : currentParams[0].period_from;

  const [displayedValue, setDisplayedValue] = useState<number>(value)

  useEffect(() => {
    setDisplayedValue(value)
  }, [value])

  const handleChange = (ev: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | Event) => {
    const element = ev.target as HTMLInputElement;
    const currentValue = +`${element.value}`.replace(/[^0-9]/g, '');
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

  const setValueIfEmpty = (ev: React.FocusEvent<HTMLInputElement | HTMLInputElement>) => {
    if (!ev.target.value || +ev.target.value < minValue) {
      setValue(minValue);
      setDisplayedValue(minValue)
    }
  }

  const innerText = currentConditions? '₽' : 'дней';

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