import axios from 'axios'
import { HOST, PRODUCT_CATEGORIES } from "../../constants";

export const getProducts = () => {
  return dispatch => {
    Promise.all(
      PRODUCT_CATEGORIES
        .map(category => axios.get(`${HOST}/data/${category}Data.json`)
          .then(({ data }) => data)
        )
    ).then(categories => {
      const products =
        categories
          .map((c, i) => c.map(p => ({ ...p, category: PRODUCT_CATEGORIES[i] })))
          .reduce((acc, c) => acc.concat(c), []);
      dispatch({
        type: 'SET_PRODUCTS',
        data: products
      })
    })
  }
}