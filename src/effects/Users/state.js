import { USER_STATE } from './constants';

const state = {
  [USER_STATE]: {
    error: null,
    isFetching: false,
    users: null,
  },
};

export default state;
