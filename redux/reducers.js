import { combineReducers } from 'redux';

const count = (state = { currentCount: 0 }, action) => {
  console.log({ action });
  switch (action.type) {
    case 'CHANGE_VALUE':
      return { ...state, currentCount: action.payload.value };
    default:
      return state;
  }
};

export default combineReducers({ count });
