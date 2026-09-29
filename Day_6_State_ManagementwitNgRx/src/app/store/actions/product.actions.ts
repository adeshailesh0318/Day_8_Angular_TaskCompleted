import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/product';

export const loadProducts = createAction(
  '[Product] Load Products'
);

export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: Product[] }>()
);

export const addProduct = createAction(
  '[Product] Add Product',
  props<{ product: Product }>()
);

export const deleteProduct = createAction(
  '[Product] Delete Product',
  props<{ id: number }>()
);


export const saveProducts = createAction(
  '[Product] Save Products',
  props<{ products: Product[] }>()
);