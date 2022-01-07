const express = require('express');
const router = express.Router();
const productQueries = require('../db/product-queries');

// router.use((req, res, next) => {
//   if (!req.session.user_id) {
//     return res.redirect('/');
//   }
//   next();
// });

// GET /products/
router.get('/', (req, res) => {
  productQueries.getProducts()
    .then((products) => {
      res.json(products);
      // res.render()
    });
});

// GET /products/:id
router.get('/:id', (req, res) => {
  productQueries.getProductById(req.params.id)
    .then((product) => {
      res.json(product);
    });
});

// export the router object
module.exports = router;
