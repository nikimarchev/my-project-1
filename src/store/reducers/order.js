const initialState = {
  items: []
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { items: [...state.items, action.item] };
    case 'REMOVE_FROM_CART':
      return { items: state.items.filter(item => item.name !== action.name) };
    default:
      return state;
  }
}

export default orderReducer