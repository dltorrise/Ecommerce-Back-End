const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categories = await Category.findAll({
    include: ['product_name', 'category_id', 'stock', 'price'] //not sure if this is correct
  })
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  if (req.params.id===tag_id) {
    const category = await Category.findAll({
      include: ['product_name', 'category_id', 'stock', 'price']
    })
  }
});

router.post('/', async (req, res) => {
  // create a new category
  const category = await Category.create({category_id: req.body})
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  await Category.update({tag_name: req.body}, {
    where: {
      category_id: req.params.id
    }
  }) //not sure what to do if it autoincrememnts
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  await Category.destroy({
    where: {
      category_id: req.params.id
    }
  })
});

module.exports = router;
