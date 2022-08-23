const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'User1',
    email: 'user1@gmail.com',
    password: 'pass123'
  },
  {
    username: 'User2',
    email: 'user2@gmail.com',
    password: 'pass123'
  },
  {
    username: 'User3',
    email: 'user3@gmail.com',
    password: 'pass123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;