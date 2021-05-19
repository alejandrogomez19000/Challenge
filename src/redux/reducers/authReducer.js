import actionTypes from "../actionTypes";

const initialState = {
  isLogged: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isLogged: true,
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
