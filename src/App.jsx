import React from 'react';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import DepoTypeSelect from './components/DepoTypeSelect/depoTypeSelect';
import SlideInputContainer from './components/slideInput/slideInputContainer';
import creditImg from '../src/assets/img/credit.png';
import infoSignImg from '../src/assets/img/bottomSign.png';
import { MOCKED_DATA } from './response/depcalc';


function App() {

  const depositType = useSelector(state => state.depositDetails.depositType);
  const deposits = useSelector(state => state.depositDetails.deposits);

  const currentParams = deposits.find(item => item.code === depositType).param;

  return (
    <div className='centered-content'>
      <div className='body-container'>
        <div className='body-container__content'>
          <div className='body-container__content-top'>
            <div className='body-container__content-top-left'>
              <h1 className='left-content__header'>
                Депозитный калькулятор
              </h1>
              <DepoTypeSelect />
              <SlideInputContainer headingText={'Срок кредита'} inputType={'days'} />
              <SlideInputContainer headingText={'Ежемесячный платеж'} inputType={'rub'} />
            </div>
            <div className='body-container__content-top-right'>
              <img alt='credit' src={creditImg} className='right-content__image' />
            </div>
          </div>
          <div className='body-container__content-center'>

            <div className='center-content__block'>
              <span className='center-content__block-heading'>Процентная ставка</span>
              <span className='center-content__block-text'>12,1%</span>
            </div>

            <div className='center-content__block'>
              <span className='center-content__block-heading'>Сумма кредита</span>
              <div className='center-content__block-text'>
                454 146 366
                <span className='center-content__block-text gray'>,00 ₽</span>
              </div>
            </div>

            <div className='center-content__block'>
              <span className='center-content__block-heading'>Доход</span>
              <div className='center-content__block-text'>
                <span className='center-content__block-text-small'>от</span>
                203 155
                <span className='center-content__block-text gray'>
                  ,00 ₽/
                  <span className='center-content__block-text-small gray'>
                    мес
                  </span>
                </span>
              </div>
            </div>

          </div>

          <div className='body-container__content-bottom'>
            <Button
              className='bottom-content__button'
              variant="contained"
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
