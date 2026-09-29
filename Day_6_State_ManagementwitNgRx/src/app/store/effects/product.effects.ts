import { Injectable } from '@angular/core';
import {Actions,createEffect,ofType} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {map,tap,withLatestFrom} from 'rxjs/operators';
import {loadProducts,loadProductsSuccess,addProduct,deleteProduct} from '../actions/product.actions';
import {selectAllProducts} from '../selectors/product.selectors';
import { Product } from '../../models/product';

@Injectable()
export class ProductEffects {

  // Load products from localStorage

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(

      ofType(loadProducts),

      map(() => {

        const storedProducts =
          localStorage.getItem('products');

         let products: Product[];

        if (storedProducts) {

          products =
            JSON.parse(storedProducts);

        } else {

          products = [
            {
              id: 1,
              name: 'Laptop',
              price: 50000
            },

            {
              id: 2,
              name: 'Mobile',
              price: 25000
            },

            {
              id: 3,
              name: 'Keyboard',
              price: 1500
            }
          ];

          localStorage.setItem(
            'products',
            JSON.stringify(products)
          );
        }

        return loadProductsSuccess({
          products
        });

      })

    )
  );


  // Save products after add/delete

  saveProducts$ = createEffect(
    () =>
      this.actions$.pipe(

        ofType(
          addProduct,
          deleteProduct
        ),

        withLatestFrom(
          this.store.select(selectAllProducts)
        ),

        tap(([action, products]) => {

          localStorage.setItem(
            'products',
            JSON.stringify(products)
          );

        })

      ),

    {
      dispatch: false
    }
  );


  constructor(
    private actions$: Actions,
    private store: Store
  ) {}

}