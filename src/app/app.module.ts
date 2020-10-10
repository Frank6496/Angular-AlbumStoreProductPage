import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/*IMPORTING PRODUCTSERVICE IN THE APP MODULE*/
import {ProductService} from './product.service';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductTracklistingComponent } from './product-tracklisting/product-tracklisting.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionComponent,
    ProductTracklistingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  /*ADDING PRODUCTSERVICE AS A PROVIDER TO THE ARRAYS OF PROVIDERS*/
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
