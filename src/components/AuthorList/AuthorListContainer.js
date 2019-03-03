import { connect } from 'react-redux';

import { postsSelectors, postsActions } from '../../redux';
import AuthorList from './AuthorList';

const mapStateToProps = state => ({
  authors: postsSelectors.getAllAuthors(state),
  activeAuthorId: null,
});

const mapDispatchToProps = {
  selectAuthor: postsActions.selectAuthor,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthorList);
