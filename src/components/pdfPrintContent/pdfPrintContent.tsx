import React from 'react';
import { useSelector } from 'react-redux';
import { declOfNum } from '../../util/misk';
import { IDepositDetails, stateType } from '../../typesTS/mainTypes';


interface IPdfPrintContent {
  daysValue: number,
  moneyValue: number,
  percent: number,
  summ: number,
  profit: number,
}

const PdfPrintContent:React.FC<IPdfPrintContent> = ({ daysValue, moneyValue, percent, summ, profit }) => {
  const { depositType } = useSelector(({depositDetails}:stateType<IDepositDetails>) => depositDetails);
  const { deposits } = useSelector(({depositDetails}:stateType<IDepositDetails>) => depositDetails);

  const numberOfDays = declOfNum(daysValue, ['день', 'дня', 'дней'], true)

  return(
    <iframe id="ifmContentsToPrint" style={{ height: '0px', width: '0px', position: 'absolute' }}>
      <div id='divContents'>
        <div className='print-container'>
          <div>Вклад : {deposits.find(item => item.code === depositType)?.name}</div>
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
