import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs/observable/from';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo;
  constructor() { }

/*Inject The Service Into Product Description’s Constructor*/
  private _productservice;

/*Calling getAlbum from Product Description’s ngOnInit() Method*/
  ngOnInit() {
    subscribe(response => this.albumInfo = response).this._productService.getAlbum(1);
  }

}
