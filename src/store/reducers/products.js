const productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.data;

    default:
      return state;
  }
}

export default productsReducer;