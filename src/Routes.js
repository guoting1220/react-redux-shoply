import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Cart from './Cart';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ProductList />
      </Route>

      {/* <Route exact path="/products">

      </Route> */}

      <Route exact path="/products/:id">
        <ProductDetail />
      </Route>

      <Route exact path="/cart">
        <Cart />
      </Route>

      <Redirect to="/" />

    </Switch>
  )
}

export default Routes;