import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get(Constants.URI_ENPOINT + Constants.METHODS.GET_ALL_PRODUCTS)
  }
  createProduct (body:any){
    return this.http.post(Constants.URI_ENPOINT+Constants.METHODS.CREATE_PRODUCT,body)
  }

  getProduct(id:string){
    return this.http.get(Constants.URI_ENPOINT+id)
  }
  updateProduct(id:string,body:any){
    return this.http.patch(Constants.URI_ENPOINT+id,body)
  }

  deleteProduct(id:string){
    return this.http.delete(Constants.URI_ENPOINT+id)
  }

}


