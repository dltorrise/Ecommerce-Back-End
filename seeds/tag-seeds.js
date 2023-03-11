const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'rock music', //1
  },
  {
    tag_name: 'pop music', //2
  },
  {
    tag_name: 'blue', //3
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
