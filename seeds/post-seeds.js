const { Post } = require('../models');

const postdata = [
  {
    title: 'Title1',
    description: 'Post1',
    user_id: 1
  },
  {
    title: 'Title2',
    description: 'Post2',
    user_id: 2
  },
  {
    title: 'Title3',
    description: 'Post3',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;