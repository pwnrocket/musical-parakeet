import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
import { actionTypes } from './ActionTypes';

const initialState = {
    users: []
}

export const AppContext = createContext(initialState);

export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const addUser = (user) => {
        dispatch({
          type: actionTypes.ADD_USER,
          payload: user
        })
    }

    const editUser = (user) => {
        dispatch({
          type: actionTypes.EDIT_USER,
          payload: user
        })
    }

    const deleteUser = (id) => {
        dispatch({
          type: actionTypes.DELETE_USER,
          payload: id
        })
    }

    return (
        <AppContext.Provider value={{
            users: state.users,
            addUser,
            editUser,
            deleteUser,
        }}>
            {children}
        </AppContext.Provider>
    )
}