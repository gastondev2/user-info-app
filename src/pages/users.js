import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsersRequestAction } from '../effects/Users/actions';
import { getUsers, getStatus } from '../effects/Users/selectors';

import Card from '../components/Card';
import LoadingSpinner from '../components/LoadingSpinner';

import { UsersBase, Header } from './styles';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  const isLoading = useSelector(getStatus);

  useEffect(() => {
    dispatch(fetchUsersRequestAction());
  }, []);

  return (
    <UsersBase>
      <>
        <Header>User Information</Header>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div>
            {users?.map(item => (
              <Card {...item} />
            ))}
          </div>
        )}
      </>
    </UsersBase>
  );
};

export default Users;
