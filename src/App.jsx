import React from 'react';
import { MOCKED_DATA } from './response/depcalc';
import DepoTypeSelect from './components/DepoTypeSelect/depoTypeSelect';
import creditImg from '../src/assets/img/credit.png';
import SlideInputContainer from './components/slideInput/slideInputContainer';

function App() {

  return (
    <div className='centered-content'>
      <div className='body-container'>
        <div className='body-container__content'>
          <div className='body-container__content-top'>
            <div className='body-container__content-top-left'>
              <h1 className='left-content__header'>
                Депозитный калькулятор
              </h1>
              <DepoTypeSelect data={MOCKED_DATA.deposits} />
              <SlideInputContainer headingText={'Срок кредита'} inputType={'days'} />
              <SlideInputContainer headingText={'Ежемесячный платеж'} inputType={'rub'} />
            </div>
            <div className='body-container__content-top-right'>
              <img alt='credit' src={creditImg} className='right-content__image' />
            </div>
          </div>
          <div className='body-container__content-bottom'>

            <div className='bottom-content__block'>
              <span className='bottom-content__block-heading'>Процентная ставка</span>
              <span className='bottom-content__block-text'>12,1%</span>
            </div>

            <div className='bottom-content__block'>
              <span className='bottom-content__block-heading'>Сумма кредита</span>
              <div className='bottom-content__block-text'>
                454 146 366
                <span className='bottom-content__block-text gray'>,00 ₽</span>
              </div>
            </div>

            <div className='bottom-content__block'>
              <span className='bottom-content__block-heading'>Доход</span>
              <div className='bottom-content__block-text'>
                <span className='bottom-content__block-text-small'>от</span>
                203 155
                <span className='bottom-content__block-text gray'>
                  ,00 ₽/
                  <span className='bottom-content__block-text-small gray'>
                    мес
                  </span>
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
