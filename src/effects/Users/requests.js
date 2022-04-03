import { requestGET } from '../../utils/requests';
import { mapDataToUserList } from './mappers';

const ENDPOINTS = {
  USER_LIST: '',
};

export function getUsersRequest(params) {
  return requestGET({
    data: params,
    endpoint: ENDPOINTS.USER_LIST,
    mapper: mapDataToUserList,
  });
}
