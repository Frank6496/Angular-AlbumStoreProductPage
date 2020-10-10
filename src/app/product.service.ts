import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';


/*IMPORTING THE HTTP AND RESPONSE INTO PRODUCTSERVICE*/
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Album } from 'Album';

@Injectable()
export class ProductService {
  /*INJECTING A PRIVATE HTTP OBJECT IN PRODUCTSERVICE*/
  private _albumUrl = '../assets/album.json';


  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map(response => <Album>response.json());
  }
}

/*ADDING AN albumUrl PRPERTY BY CREATING A PRIVATE CLASS PROPERTY THATS EQUAL TO THE JSON STRING*/
