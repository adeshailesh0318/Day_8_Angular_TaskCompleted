import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QRCodeModule } from 'angularx-qrcode';

import {
  TranslateModule,
  TranslateLoader
} from '@ngx-translate/core';

import {
  TranslateHttpLoader
} from '@ngx-translate/http-loader';

import { QrCodeComponent } from './qr-code/qr-code.component';
import { LanguageComponent } from './language/language.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    './assets/i18n/',
    '.json'
  );
}

@NgModule({

  declarations: [
    AppComponent,
    QrCodeComponent,
    LanguageComponent
  ],

  imports: [

    BrowserModule,

    HttpClientModule,

    FormsModule,

    QRCodeModule,

    TranslateModule.forRoot({

      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }

    })

  ],

  providers: [],

  bootstrap: [
    AppComponent
  ]

})
export class AppModule {}