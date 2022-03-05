import React, { useContext, useEffect } from 'react';
import {Header} from './Header';
import {UserList} from './UserList';

import { AppContext } from '../context/AppState';
import { getAllUsers } from '../services/userService';

export const Home = () => {
  const {addUser, users} = useContext(AppContext);
  useEffect(() => {
    if(users.length > 0){
      return
    }
    getAllUsers()
    .then(users => {
      users.map(user => addUser(user))
    })
  },[])
  return (
    <>
     <Header/>
    <UserList/>
    </>    
  )
}
