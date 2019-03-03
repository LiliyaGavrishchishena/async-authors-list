import React, { Component } from 'react';
import { connect } from 'react-redux';

import AuthorList from './AuthorList/AuthorListContainer';
import PostList from './PostList/PostListContainer';

import { postsOperations } from '../redux';

import s from './App.module.css';

class App extends Component {
  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  render() {
    return (
      <main className={s.container}>
        <section className={s.sticky}>
          <AuthorList />
        </section>

        <section className={s.section}>
          <PostList />
        </section>
      </main>
    );
  }
}

const mapDispatchToProps = {
  fetchPosts: postsOperations.fetchPosts,
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
