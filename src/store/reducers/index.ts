import { combineReducers } from 'redux';
import depositDetailsReducer from './depositDetails';

export const rootReducer = combineReducers({
  depositDetails: depositDetailsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
