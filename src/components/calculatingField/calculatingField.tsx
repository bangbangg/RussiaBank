import React from 'react';
import { declOfNum } from '../../util/misk';


interface ICalculatingFieldProps {
  heading: string,
  fieldValue: number,
  isThatMoneyField: boolean,
  daysValue?: number
}

const CalculatingField:React.FC<ICalculatingFieldProps> = ({ heading, fieldValue, isThatMoneyField, daysValue }) => {

  const summPartsToDisplay = (summ:number) => `${summ}`.split('.');

  return (
    <div className='center-content__block'>
      {
        isThatMoneyField &&
        <div className='center-content__block'>
          <span className='center-content__block-heading'>
            {heading}
            {
              daysValue &&
              <span className='block-heading__underlined-text'>
                {declOfNum(daysValue, ['день', 'дня', 'дней'], true)}
              </span>
            }
          </span>
          <div className='center-content__block-text'>
            {summPartsToDisplay(fieldValue)[0]}
            <span className='center-content__block-text gray'>
              ,{summPartsToDisplay(fieldValue)[1] || '00'} ₽
            </span>
          </div>
        </div>
      }
      {
        !isThatMoneyField &&
        <>
          <span className='center-content__block-heading'>{heading}</span>
          <span className='center-content__block-text'>{fieldValue}%</span>
        </>
      }
    </div>
  )
}

export default CalculatingField;