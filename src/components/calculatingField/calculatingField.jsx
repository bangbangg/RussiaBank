import React from 'react';
import { declOfNum } from '../../util/misk';


const CalculatingField = ({ heading, fieldValue, isThatMoneyField, daysValue }) => {
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
            {fieldValue[0]}
            <span className='center-content__block-text gray'>
              ,{fieldValue[1] || '00'} ₽
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