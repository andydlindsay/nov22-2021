require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

// import database connection
const db = require('./db/db');

// import the routers
const productRouter = require('./routes/product-router');
const blogpostRouter = require('./routes/blogpost-router');

// pass the routers to express as middleware
app.use('/api/v2/products', productRouter);
app.use('/blogposts', blogpostRouter(db));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
