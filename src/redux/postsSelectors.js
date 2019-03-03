import { createSelector } from 'reselect';

const getAuthorsIds = state => state.authors.ids;
const selectedAuthorId = state => state.authors.selectedId;
const getAllAuthorsEntities = state => state.entities.authors;

const getAllAuthors = createSelector(
  [getAuthorsIds, getAllAuthorsEntities],
  (ids, entities) => ids.map(id => entities[id]),
);

const getPostsIds = state => state.posts;
const getAllPostsEntities = state => state.entities.posts;

const selectedAuthorPost = createSelector(
  [getPostsIds, getAllPostsEntities, selectedAuthorId],
  (ids, entities, authorId) =>
    ids.reduce((acc, postId) => {
      const post = entities[postId];
      if (post.author === authorId) {
        acc.push(post);
      }
      return acc;
    }, []),
);

export default {
  getAllAuthors,
  selectedAuthorPost,
};
