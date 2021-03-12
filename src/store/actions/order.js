export const addToCart = (item) => {
  return {
    type: 'ADD_TO_CART',
    item: item
  }
}

export const removeFromCart = (name) => {
  return {
    type: 'REMOVE_FROM_CART',
    name: name
  }
}