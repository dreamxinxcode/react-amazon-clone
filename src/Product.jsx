import React from 'react'
import './Product.scss';
import StarRate from '@material-ui/icons/StarRate';

function Product({id, title, image, price, rating}) {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => (
            <StarRate />
          ))}
        </div>
      </div>
      <img src={image} alt="product_image"/>

      <button>Add to Basket</button>
    </div>
  )
}

export default Product
