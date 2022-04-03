import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsersRequestAction } from '../effects/Users/actions';
import { getUsers } from '../effects/Users/selectors';
import Card from '../components/Card';

import { UsersBase, Header } from './styles';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);

  useEffect(() => {
    dispatch(fetchUsersRequestAction());
  }, []);

  return (
    <UsersBase>
      <>
        <Header>User Information</Header>
        {users?.map(item => (
          <Card {...item} />
        ))}
      </>
    </UsersBase>
  );
};

export default Users;
