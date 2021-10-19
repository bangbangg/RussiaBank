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
              <SlideInputContainer />
              <SlideInputContainer />
            </div>
            <div className='body-container__content-top-right'>
              <img alt='credit' src={creditImg} className='right-content__image' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
