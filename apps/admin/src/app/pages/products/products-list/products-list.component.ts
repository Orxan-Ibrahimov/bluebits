import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '@bluebits/my-products';
@Component({
  selector: 'admin-products-list',
  templateUrl: './products-list.component.html',
  styles: [
  ]
})
export class ProductsListComponent implements OnInit {

  constructor(private productsService:ProductsService) { }
 products:Product[];

  ngOnInit(): void {
    this._getProducts();
  }

  private _getProducts(){
    this.productsService.getProducts().subscribe(datas=> {
      this.products = datas;
    });
  }

}
