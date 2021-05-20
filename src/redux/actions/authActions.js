import actionTypes from "../actionTypes";

export const logInAction = (user) => ({ type: actionTypes.LOGIN, user });
export const logOutAction = () => ({ type: actionTypes.LOGOUT });
