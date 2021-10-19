import { depositDetails } from './actionTypes';

export const setDepositType = depositType => ({
  depositType,
  type: depositDetails.SET_DEPOSIT_TYPE
});
