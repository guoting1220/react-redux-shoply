import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import './ProductDetail.css';
import CartEditPanel from './CartEditPanel';

const ProductDetail = () => {
  const products = useSelector(store => store.products);
  const { id } = useParams();
  const product = products[id];

  return (
    <div className="ProductDetail">
      <img src={product.image_url} alt={product.name}></img> 
     <CartEditPanel id={id}/>
      <h1>{product.name}</h1>
      
      <h4>Price: $ {product.price}</h4> 
      <p>{product.description}</p>
    </div>
  )
}

export default ProductDetail;