import types from '../actionTypes';

export default function postReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload.ids.posts;

    case types.DELETE_SUCCESS:
      return state.filter(id => id !== payload);

    default:
      return state;
  }
}
