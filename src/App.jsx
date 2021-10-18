import { MOCKED_DATA } from './response/depcalc';

function App() {

  console.log(MOCKED_DATA);

  return (
    <div className='centered-content'>
      <div className="body-container">
        <h1 className="body-container__header">
          Депозитный калькулятор
        </h1>
      </div>
    </div>
  );
}

export default App;
