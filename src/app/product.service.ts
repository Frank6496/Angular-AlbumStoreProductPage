import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
/*import * as Observable_1 from 'rxjs/Observable';*/


@Injectable()
export class ProductService {
  /*INJECTING A PRIVATE HTTP OBJECT IN PRODUCTSERVICE*/
  private _albumUrl = '../assets/album.json';


  constructor(private _http: Http) { }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl).map((response) => response.json());
  }
}
