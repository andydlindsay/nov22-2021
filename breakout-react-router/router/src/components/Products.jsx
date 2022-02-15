import Product from './Product';
import {Link, Routes, Route} from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <h2>This is the Products component</h2>

      <nav>
        <Link to="/products/1">Product #1</Link>
        <Link to="/products/2">Product #2</Link>
        <Link to="/products/3">Product #3</Link>
        <Link to="4">Product #4</Link>
        <Link to="..">Go back</Link>
      </nav>

      <Routes>
        <Route path=":productId" element={<Product />} />
        <Route path="/" element={<h2>Please choose an item from the list above</h2>} />
      </Routes>
    </div>
  );
};

export default Products;
