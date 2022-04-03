import { combineReducers } from 'redux';

import users from './effects/Users/reducer';

const createRootReducer = () =>
  combineReducers({
    users,
  });

export default createRootReducer;
