import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { from } from 'rxjs/observable/from';
import { Album } from './album';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  /*INJECTING A PRIVATE HTTP OBJECT IN PRODUCTSERVICE*/
  private _albumUrl = '../assets/album.json';


  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map((response) => <Album>response.json());
  }
}
