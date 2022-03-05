import { actionTypes } from "./ActionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case actionTypes.ADD_USER:
            return {
                ...state,
                users : [action.payload, ...state.users]
            }
        case actionTypes.EDIT_USER:
                const updatedUser = action.payload;
                const updatedUsers = state.users.map(user => {
                    if(user.userID === updatedUser.userID){
                        return updatedUser;
                    }
                    return user;
                })
                return{
                    ...state,
                    users: updatedUsers
                }
        case actionTypes.DELETE_USER: 
                return {
                    ...state,
                    users : state.users.filter(user => {
                        return user.userID !== action.payload;
                    })
                }
        default:
            return state;
    }
}