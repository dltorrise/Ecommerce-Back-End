const router = require('express').Router();
const { UPSERT } = require('sequelize/types/lib/query-types');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  const tags = await ProductTag.findAll({
    include: [Product] //will bring in all categories via index.js file 
  })
  res.status(200).json(tags)
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  const tag = await ProductTag.findOne({
    where: {id: req.params.id},
    include: [Product]
  })
  res.status(200).json(tag)

  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tag = await ProductTag.create(req.body)
    res.status(200).json(tag)
    } catch(err) {
      console.log(err);
      res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tag = await ProductTag.update(req.body, {
      where: {
        id: req.params.id
      }
    }) 
    res.json(tag)
  } catch(err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  await ProductTag.destroy({
    where: {
      category_id: req.params.id //not sure
    }
  })
  res.status(200).json('Deleted')
});

module.exports = router;
