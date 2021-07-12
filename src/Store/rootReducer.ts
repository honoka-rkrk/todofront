import { combineReducers } from '@reduxjs/toolkit';

import detailReducer from './selectDetail';

const rootReducer = combineReducers({
  detail: detailReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
