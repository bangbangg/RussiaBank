import { depositDetails } from '../actions/actionTypes';
import { MOCKED_DATA } from '../../response/depcalc';


const initialState = {
  depositType: 'unic',
  deposits: MOCKED_DATA.deposits
}

const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case depositDetails.SET_DEPOSIT_TYPE:
      return { ...state, depositType: action.depositType };
    default:
      return state;
  }
};

export default reducer;