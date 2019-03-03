import { connect } from 'react-redux';

import PostList from './PostList';
import { postsSelectors, postsOperations } from '../../redux';

const mapStateToProps = state => ({
  posts: postsSelectors.selectedAuthorPost(state),
});

const mapDispatchToProps = {
  deletePost: postsOperations.deletePost,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList);
