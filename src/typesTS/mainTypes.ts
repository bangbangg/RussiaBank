export interface IDepositDetails {
  depositType: string,
  deposits: IDeposits[]
}

export interface IDeposits {
  code: string,
  name: string
  param: IParam[]
}

export interface IParam {
  period_from: number,
  summs_and_rate: ISummsAndRate[]
}

export interface ISummsAndRate {
  summ_from: number,
  rate: number
}

export type stateType<T> = {
  [n: string]: T;
};