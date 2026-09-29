import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from './models/product';

import {
  addProduct,
  deleteProduct,
  loadProducts
} from './store/actions/product.actions';

import {
  selectAllProducts,
  selectProductCount
} from './store/selectors/product.selectors';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  products$: Observable<Product[]>;

  productCount$: Observable<number>;

  productName = '';

  productPrice = 0;

  constructor(private store: Store) {

    this.products$ =
      this.store.select(selectAllProducts);

    this.productCount$ =
      this.store.select(selectProductCount);
  }

  ngOnInit(): void {

    this.store.dispatch(loadProducts());

  }

  addProduct(): void {

    if (!this.productName || this.productPrice <= 0) {
      return;
    }

    const product: Product = {

      id: Date.now(),

      name: this.productName,

      price: this.productPrice

    };

    this.store.dispatch(
      addProduct({ product })
    );

    this.productName = '';

    this.productPrice = 0;
  }

  deleteProduct(id: number): void {

    this.store.dispatch(
      deleteProduct({ id })
    );

  }

}