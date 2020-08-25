/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  id: null,
  name: '',
};

export const loginReducer = createReducer(initialState, {
  [types.LOGIN_REQUEST](state, action) {
    return {
      ...state,
      name: action.name,
    };
  },
  [types.LOGIN_LOADING_ENDED](state) {
    return { ...state };
  },
  [types.LOGIN_RESPONSE](state, action) {
    return {
      ...state,
      id: action.response,
    };
  },
  [types.LOGIN_FAILED](state) {
    return {
      ...state,
    };
  },
  [types.LOGOUT](state) {
    return {
      ...state,
      username: '',
      password: '',
      id: null,
    };
  },
});
