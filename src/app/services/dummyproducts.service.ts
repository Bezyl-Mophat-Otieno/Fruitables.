import { Injectable } from '@angular/core';
import { Product, products } from '../data';

@Injectable({
  providedIn: 'root'
})
export class DummyproductsService {


  getAllProducts():Product[]{
    return products
  }
  createProduct(body:Product):string{
    products.push(body)
    return "Product Added Successfully";
  }

  getProduct(id:number){
    return products.find(product=>(product.id === id))
  }
  updateProduct(id:number,body:any):string{
    const product = this.getProduct(id)
    const indexOfProduct = products.indexOf(product!)
    if(product!=null){
      const newProduct = {...product,...body}
      products[indexOfProduct] = {...products[indexOfProduct],...newProduct}
      return "Product Updated Successfully"
    }else{
      return "Product Not Found thus not modified"
    }
  }

  deleteProduct(id:number):string{
    const product = this.getProduct(id)
    if(product!=null){
      
          const toBeDeletedProduct = products.indexOf(product)
          products.splice(toBeDeletedProduct,1);
          return "Product Deleted Successfully"
    }else{
      return "Product Not Deleted"
    }
    
  }
}
