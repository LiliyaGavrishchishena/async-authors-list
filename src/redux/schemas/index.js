import { schema } from 'normalizr';

const authorSchema = new schema.Entity('authors');

const postSchema = new schema.Entity('posts', {
  author: authorSchema,
});

export default postSchema;
