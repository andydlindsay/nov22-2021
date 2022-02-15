import { useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom';

const Product = () => {
  const params = useParams();
  // console.log(params);
  const navigate = useNavigate();
  // console.log(navigate);

  useEffect(() => {
    setTimeout(() => {
      navigate('/about');
      // navigate(-1); // go back
    }, 3000);
  }, [navigate]);

  // useEffect(() => {
  //   axios.get(`/api/products/${params.productId}`)
  //     .then((response) => {
  //       setProduct(response.data);
  //     })
  //     .catch(() => {
  //       console.log('cannot find your product');
  //     });
  // }, [params.productId]);

  return (
    <div>
      <h2>This is the Product component #{params.productId}</h2>
    </div>
  );
};

export default Product;
