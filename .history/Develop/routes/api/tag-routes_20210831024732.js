const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  try {
    const tagData = await Tag.findAll({
  // be sure to include its associated Product data
  include: {
    model: Product,
    attributes: ['product_name', 'price', 'stock', 'category_id']
  }
})
  res.status(200).json(tagData);
  } catch (err) {
  res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  try {
    const tagData = await Tag.findByPk(req.params.id, {
  // be sure to include its associated Product data
      
});

router.post('/', (req, res) => {
  // create a new tag

});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
