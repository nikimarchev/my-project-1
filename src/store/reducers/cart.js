const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        [action.itemId]: state[action.itemId] ? state[action.itemId] + 1 : 1
      };
    case 'REMOVE_FROM_CART':
      const { [action.itemId]: count, ...others } = state;
      if (count) {
        return count - 1 === 0 ? others : {
          ...state,
          [action.itemId]: count - 1
        }
      } else return others;
    default:
      return state;
  }
}

export default cartReducer