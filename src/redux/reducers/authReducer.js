import actionTypes from "../actionTypes";

const initialState = {
  isLogged: false,
  user: {},
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isLogged: true,
        user: action.user,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
}
