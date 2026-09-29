import { createReducer, on } from '@ngrx/store';

import { Product } from '../../models/product';

import {
  loadProductsSuccess,
  addProduct,
  deleteProduct
} from '../actions/product.actions';

export interface ProductState {
  products: Product[];
}

export const initialState: ProductState = {
  products: []
};

export const productReducer = createReducer(

  initialState,

  on(
    loadProductsSuccess,
    (state, { products }) => ({
      ...state,
      products: products
    })
  ),

  on(
    addProduct,
    (state, { product }) => ({
      ...state,
      products: [
        ...state.products,
        product
      ]
    })
  ),

  on(
    deleteProduct,
    (state, { id }) => ({
      ...state,

      products:
        state.products.filter(
          product => product.id !== id
        )
    })
  )

);