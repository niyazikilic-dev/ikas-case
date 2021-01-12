import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../action/products';
import { addBasketItems } from '../action/basket';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  React.useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className='product-list-main'>
      {products.map((product) => (
        <div
          onClick={() => dispatch(addBasketItems(product))}
          key={product.id}
          className='product-list-items'
        >
          <div className='product-list-img'>
            <img src={product.productImage} alt='' />
          </div>
          <div className='product-list-product-info'>
            <span>{product.productName}</span>
            <span>₺ {product.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
