import React from 'react';

import Post from '../Post/Post';
import s from './PostList.module.css';

const PostList = ({ posts, deletePost }) =>
  console.log(posts) || posts.length > 0 ? (
    <ul className={s.list}>
      {posts.map(post => (
        <li key={post.id} className={s.item}>
          <Post {...post} onDelete={() => deletePost(post.id)} />
        </li>
      ))}
    </ul>
  ) : null;

export default PostList;
