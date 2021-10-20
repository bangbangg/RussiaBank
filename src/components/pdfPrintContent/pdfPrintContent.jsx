import React from 'react';
import { useSelector } from 'react-redux';
import { declOfNum } from '../../util/misk';


const PdfPrintContent = ({ daysValue, moneyValue, percent, summ, profit }) => {
  const depositType = useSelector(state => state.depositDetails.depositType);
  const deposits = useSelector(state => state.depositDetails.deposits);

  const numberOfDays = declOfNum(daysValue, ['день', 'дня', 'дней'], true)

  return(
    <iframe id="ifmcontentstoprint" style={{ height: '0px', width: '0px', position: 'absolute' }}>
      <div id='divcontents'>
        <div className='print-container'>
          <div>Вклад : {deposits.find(item => item.code === depositType).name}</div>
          <div>Срок вклада : {numberOfDays}</div>
          <div>Cумма вклада : {moneyValue}₽</div>
          <div>Процентная ставка : {percent}%</div>
          <div>Cумма через {numberOfDays} : {summ}₽</div>
          <div>Доход: {profit}₽</div>
          <p>Спасибо, что выбрали наш банк</p>
        </div>
      </div>
    </iframe>
  )
}

export default PdfPrintContent;
