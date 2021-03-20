import React from 'react';
import {  useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import './ProductList.css';
import CartEditPanel from './CartEditPanel';

const ProductList = () => {
  const products = useSelector(store => store.products);

  return (
    <div>
      <h2>Products</h2>
      <div className="ProductList">
        {Object.keys(products).map(id =>
          <div key={id}>
            <CartEditPanel id={id}/>
            <Link exact to={`/products/${id}`}>
              <p className="ProductList-product">{products[id].name} </p>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductList;