const router = require('express').Router();
const { UPSERT } = require('sequelize/types/lib/query-types');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  const tags = await ProductTag.findAll({
    include: ['product_name', 'category_id', 'stock', 'price']
  })
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  if (req.params.id===tag_id) {
    const tag = await ProductTag.findAll({
      include: ['product_name', 'category_id', 'stock', 'price']
    })
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  const tag = await ProductTag.create({tag_id: req.body})
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  await ProductTag.update({tag_name: req.body}, {
    where: {
      tag_id: req.params.id
    }
  }) //not sure what to do if it autoincrememnts
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  await ProductTag.destroy({
    where: {
      tag_id: req.params.id
    }
  })
});

module.exports = router;
