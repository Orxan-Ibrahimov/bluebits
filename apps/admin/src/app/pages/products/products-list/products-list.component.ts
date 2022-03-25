import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductsService } from '@bluebits/my-products';
@Component({
  selector: 'admin-products-list',
  templateUrl: './products-list.component.html',
  styles: [
  ]
})
export class ProductsListComponent implements OnInit {

  constructor(private productsService:ProductsService,private router:Router) { }
 products:Product[];

  ngOnInit(): void {
    this._getProducts();
  }

  updateProduct(productId: string) {
    this.router.navigateByUrl(`/products/update/${productId}`);    
  }

  private _getProducts(){
    this.productsService.getProducts().subscribe(datas=> {
      this.products = datas;
    });
  }

}
