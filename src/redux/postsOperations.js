import axios from 'axios';
import actions from './postsActions';

axios.defaults.baseURL = 'http://localhost:3001';

const fetchPosts = () => async dispatch => {
  dispatch(actions.fetchRequest());
  try {
    const response = await axios.get('/posts');
    dispatch(actions.fetchSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const deletePost = id => async dispatch => {
  dispatch(actions.fetchRequest());
  try {
    await axios.delete(`/posts/${id}`);
    dispatch(actions.deletePost(id));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

export default { fetchPosts, deletePost };
