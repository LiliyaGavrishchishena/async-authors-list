import { connect } from 'react-redux';

import AuthorList from './AuthorList';

const mapStateToProps = () => ({
  authors: [],
  activeAuthorId: null,
});

const mapDispatchToProps = {
  selectAuthor: () => null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthorList);
