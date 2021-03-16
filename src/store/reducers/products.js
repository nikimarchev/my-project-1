const productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.data.map((p, i) => ({ ...p, id: i }));
    default:
      return state;
  }
}

export default productsReducer;