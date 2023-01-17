import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import BrandModel from '../models/brands.model';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  _brand:BrandModel[]=[]

  constructor(private http:HttpClient) { }
  getBrands(): Promise<any>{
    return new Promise((resolve, reject)=>{
      this.http.get<any>('http://test-api-btob.donatbi.com:5001/brands').subscribe(
    (data)=>{
        console.log(data)
          this._brand=data;
          resolve(this._brand);
        },
       (error)=>{
          reject(error)

        }
      );
    });
  }
}
