export function calculateTotalPrice(products, cart, discount, tax) {
  const cartItemIds = Object.keys(cart);
  const subtotal = +cartItemIds.reduce((total, id) => total + products[id].price * cart[id], 0).toFixed(2);
  const discountAmt = +(subtotal * discount).toFixed(2);
  const taxAmt = +((subtotal - discountAmt) * tax).toFixed(2);
  const total = +(subtotal - discountAmt + taxAmt).toFixed(2);
  
  return { subtotal, discountAmt, taxAmt, total };
}

export function calculateItemsQty(cart) {
  const itemQty = Object.values(cart);
  return itemQty.reduce((total, qty) => total + qty, 0);
}