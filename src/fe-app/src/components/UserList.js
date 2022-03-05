import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap"

import { AppContext } from '../context/AppState';

export const UserList = () => {
  const {users} = useContext(AppContext);
  return (
    <ListGroup className='mt-4'>
      {users.length > 0 ? (
        <>
          {users.map(user => (
      <ListGroupItem className='d-flex p-2' key={user.userID}>
      <h3>{user.userName}</h3>
      <div className="mx-auto">
        <Link className='btn btn-warning' to={`/EditUser/${user.userID}`}>Edit User</Link>
        <Button color='danger'>Delete</Button>
      </div>
      </ListGroupItem>
          ))}
        </>
      ) : (
        <h4 className="text-center">No Users</h4>
      )}
    </ListGroup>
  )
}
