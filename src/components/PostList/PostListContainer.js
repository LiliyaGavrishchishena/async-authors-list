import { connect } from 'react-redux';

import PostList from './PostList';

const mapStateToProps = () => ({
  posts: [],
});

const mapDispatchToProps = {
  deletePost: () => null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList);
