import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import moment from 'moment';
import DepoTypeSelect from './components/depoTypeSelect/depoTypeSelect';
import SlideInputContainer from './components/slideInput/slideInputContainer';
import CalculatingField from './components/calculatingField/calculatingField';
import creditImg from '../src/assets/img/credit.png';
import infoSignImg from '../src/assets/img/bottomSign.png';
import { printPDF } from './util/misk';
import PdfPrintContent from './components/pdfPrintContent/pdfPrintContent';
import { IDepositDetails, ISummsAndRate, stateType } from './typesTS/mainTypes';


const MAX_MONEY_COUNT = 99999999999;
const MAX_DAYS_COUNT = 365;

function App() {
  const { depositType } = useSelector(({depositDetails}:stateType<IDepositDetails>) => depositDetails);
  const { deposits } = useSelector(({depositDetails}:stateType<IDepositDetails>) => depositDetails);

  const currentParams = deposits.filter(item => item.code === depositType)[0].param;

  const [currentConditions, setCurrentConditions] = useState<ISummsAndRate[]>(currentParams[0].summs_and_rate);
  const [moneyValue, setMoneyValue] = useState<number>(currentParams[0].summs_and_rate[0].summ_from);
  const [daysValue, setDaysValue] = useState<number>(currentParams[0].period_from);

  const limitDayValues = [...currentParams?.map(param => param.period_from), MAX_DAYS_COUNT];
  const limitMoneyValues = [...currentConditions?.map(condition => condition.summ_from), MAX_MONEY_COUNT];

  const getLimits = (limitsValues:number[], type:string) => {
    const limitsArray = [];
    const lastLimit = type === 'money'? MAX_MONEY_COUNT : MAX_DAYS_COUNT;
    for (let i=0; i < limitsValues.length - 1; i++) {
      const endOfPeriod = limitsValues[i+1] === lastLimit ? limitsValues[i+1] : limitsValues[i+1] - 1;
      limitsArray.push({from: limitsValues[i], to: endOfPeriod});
    }
    return limitsArray;
  }

  const daysLimitsArray = getLimits(limitDayValues, 'days');
  const moneyLimitsArray =  getLimits(limitMoneyValues, 'money');

  const currentPercentIndex = moneyLimitsArray.findIndex(limit => limit.from <= moneyValue && limit.to >= moneyValue);
  const currentPercent = currentConditions[currentPercentIndex]?.rate;

  useEffect(() => {
    const periodIndex = daysLimitsArray.findIndex(limit => limit.from <= daysValue && limit.to >= daysValue);
    setCurrentConditions(currentParams[periodIndex].summs_and_rate)
  }, [daysValue])

  useEffect(() => {
    setDaysValue(currentParams[0].period_from);
  },[currentParams])

  useEffect(() => {
    setMoneyValue(currentConditions[0].summ_from);
  },[currentConditions])

  const summAfterChoosenPeriod = () => {
    const daysInYear = moment().isLeapYear() ? 366 : 365;
    const moneyFromPercent = moneyValue * currentPercent * 0.01 * daysValue/daysInYear;
    return +moneyValue + Math.round(moneyFromPercent * 100) / 100
  }

  const profitAfterChoosenPeriod = Math.round((summAfterChoosenPeriod() - moneyValue) * 100)/100;

  return (
    <div className='centered-content'>
      <PdfPrintContent
        daysValue={daysValue}
        moneyValue={moneyValue}
        percent={currentPercent}
        summ={summAfterChoosenPeriod()}
        profit={profitAfterChoosenPeriod}
      />
      <div className='body-container'>
        <div className='body-container__content'>
          <div className='body-container__content-top'>
            <div className='body-container__content-top-left'>
              <h1 className='left-content__header'>
                Депозитный калькулятор
              </h1>
              <DepoTypeSelect />
              <SlideInputContainer
                headingText={'Срок вклада'}
                value={daysValue}
                setValue={setDaysValue}
              />
              <SlideInputContainer
                headingText={'Сумма вклада'}
                value={moneyValue}
                setValue={setMoneyValue}
                currentConditions={currentConditions}
              />
            </div>
            <div className='body-container__content-top-right'>
              <img alt='credit' src={creditImg} className='right-content__image' />
            </div>
          </div>

          <div className='body-container__content-center'>
            <CalculatingField
              isThatMoneyField={false}
              heading={'Процентная ставка'}
              fieldValue={currentPercent}
            />
            <CalculatingField
              isThatMoneyField={true}
              heading={'Сумма через'}
              daysValue={daysValue}
              fieldValue={summAfterChoosenPeriod()}
            />
            <CalculatingField
              isThatMoneyField={true}
              heading={'Доход'}
              fieldValue={profitAfterChoosenPeriod}
            />
          </div>

          <div className='body-container__content-bottom'>
            <Button
              className='bottom-content__button'
              variant="contained"
              onClick={() => printPDF()}
            >
              Продолжить
            </Button>
            <div className='bottom-content__field'>
              <img alt='infoSign' src={infoSignImg} className='bottom-content__field-image' />
              <p className='bottom-content__field-text'>
                Расчеты калькулятора являются предварительными. Для расчета дохода применяются процентные ставки, действующие на момент проведения расчетов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
