import { combineReducers } from 'redux';
import types from '../actionTypes';

function authorReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload.ids.authors;

    default:
      return state;
  }
}

function selectedId(state = null, { type, payload }) {
  switch (type) {
    case types.SELECT_AUTHOR:
      return payload;

    default:
      return state;
  }
}

export default combineReducers({
  ids: authorReducer,
  selectedId,
});
