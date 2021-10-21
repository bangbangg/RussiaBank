import { depositDetails } from './actionTypes';


interface ISetDepositType {
  depositType: string,
  type: typeof depositDetails.SET_DEPOSIT_TYPE
}

export type depositDetailsActionTypes = ISetDepositType;

export function setDepositType(depositType:string):ISetDepositType {
  return {
    depositType,
    type: depositDetails.SET_DEPOSIT_TYPE
  }
}
