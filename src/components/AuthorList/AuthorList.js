import React from 'react';

import s from './AuthorList.module.css';

const getItemStyles = (id, activeId) =>
  id === activeId ? s.activeItem : s.item;

const AuthorList = ({ authors, selectAuthor, activeAuthorId }) =>
  authors.length > 0 ? (
    <ul className={s.list}>
      {authors.map(author => (
        <li
          key={author.id}
          className={getItemStyles(author.id, activeAuthorId)}
        >
          <img src={author.image} alt="" width="80" />
          <p className={s.name}>{author.name}</p>
          <button className={s.button} onClick={() => selectAuthor(author.id)}>
            <i className={s.icon} />
          </button>
        </li>
      ))}
    </ul>
  ) : null;

export default AuthorList;
