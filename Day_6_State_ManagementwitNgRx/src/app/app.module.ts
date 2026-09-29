import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { productReducer } from './store/reducers/product.reducer';
import { ProductEffects } from './store/effects/product.effects';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,

    StoreModule.forRoot({
      products: productReducer
    }),

    EffectsModule.forRoot([
      ProductEffects
    ]),

    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],

  providers: [],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}