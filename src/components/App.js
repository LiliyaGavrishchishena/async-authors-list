import React, { Component } from 'react';
import { connect } from 'react-redux';

import AuthorList from './AuthorList/AuthorListContainer';
import PostList from './PostList/PostListContainer';

import s from './App.module.css';

class App extends Component {
  componentDidMount() {
    console.log('componentDidMount');
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

export default connect(
  null,
  null,
)(App);
