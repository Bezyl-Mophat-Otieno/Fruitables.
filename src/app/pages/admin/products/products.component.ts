import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , ReactiveFormsModule, Validators } from '@angular/forms';
import { ThemeService } from '../../../services/theme/theme.service';
import { Subscription } from 'rxjs';
import { DummyproductsService } from '../../../services/dummyproducts.service';
import { Product } from '../../../data';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  isSidePanelVisible:boolean = false;
  productList: Product[] = []
  isDarkThemeEnabled!: boolean; 
  themeSubscription!:Subscription
  toUpdateProduct = false
  selectedProduct!:Product;

  product:any = {
  name: "",
  description: "",
  quantity: 0,
  price: 0
  }

  newProductForm = new FormGroup({
    name:new FormControl(this.product.name,[Validators.required , Validators.maxLength(10)]),
    description:new FormControl(this.product.description,Validators.required),
    price:new FormControl(this.product.price,Validators.required),
    quantity:new FormControl(this.product.quantity,Validators.required)
  })

  constructor ( private productservice:DummyproductsService , private themeService:ThemeService){
    this.themeSubscription = this.themeService.darkTheme$.subscribe(theme=>{ 
      console.log(theme)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    this.isDarkThemeEnabled = theme
  })
  }
  ngOnInit(): void {
  
    this.fetchProducts()
    this.themeSubscription.unsubscribe()
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe()
  }

  openSidePanel(){
    this.isSidePanelVisible = true;
  }
  closeSidePanel(){
    this.newProductForm.reset();
    this.isSidePanelVisible = false;
    this.toUpdateProduct = false
  }

  newProduct(){
    this.openSidePanel();
  }

  submitForm(){
    if(this.selectedProduct){
      console.log(this.newProductForm.value)
      this.productservice.updateProduct(this.selectedProduct.id,this.newProductForm.value)
      this.fetchProducts()
    }else{
      this.productservice.createProduct({...this.newProductForm.value, id:10})
      this.fetchProducts()
    }
 
   
  }
  fetchProducts (){
    this.productList = this.productservice.getAllProducts();
  }

  deletProduct (id:number){
    const isDelete = confirm("Are you sure you want to delete this product")
    if(isDelete){
      this.productservice.deleteProduct(id)
      this.fetchProducts();
    }
    
  }
  updateProduct (updatedProduct:Product){
    this.openSidePanel()
    this.toUpdateProduct = true
    this.selectedProduct = updatedProduct
    this.newProductForm.setValue({
      name:updatedProduct.name,
      description:updatedProduct.description,
      price:updatedProduct.price,
      quantity:updatedProduct.quantity
    
    })
  }
  getProduct (id:number){
    const product = this.productservice.getProduct(id)
    return product
  }

}
