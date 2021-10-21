import { depositDetails } from '../actions/actionTypes';
import { MOCKED_DATA } from '../../response/depcalc';
import { depositDetailsActionTypes } from '../actions/depositDetails';
import { IDepositDetails } from "../../typesTS/mainTypes";


const initialState:IDepositDetails = {
  depositType: 'unic',
  deposits: MOCKED_DATA.deposits
}

const reducer = (state = initialState, action:depositDetailsActionTypes):IDepositDetails => {
  const { type } = action;

  switch (type) {
    case depositDetails.SET_DEPOSIT_TYPE:
      return { ...state, depositType: action.depositType };
    default:
      return state;
  }
};

export default reducer;