import { USER_STATE } from './constants';

export const getUsers = state => state[USER_STATE]?.users;
