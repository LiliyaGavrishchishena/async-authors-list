import { normalize } from 'normalizr';
import types from './actionTypes';
import postSchema from './schemas';

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchSuccess = posts => {
  const normalazedPost = normalize(posts, [postSchema]);
  return {
    type: types.FETCH_SUCCESS,
    payload: {
      ids: {
        authors: Object.keys(normalazedPost.entities.authors),
        posts: Object.keys(normalazedPost.entities.posts),
      },
      entities: normalazedPost.entities,
    },
  };
};

const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

const selectAuthor = id => ({
  type: types.SELECT_AUTHOR,
  payload: id,
});

const deletePost = id => ({
  type: types.DELETE_SUCCESS,
  payload: id,
});

export default {
  fetchRequest,
  fetchSuccess,
  fetchError,
  selectAuthor,
  deletePost,
};
