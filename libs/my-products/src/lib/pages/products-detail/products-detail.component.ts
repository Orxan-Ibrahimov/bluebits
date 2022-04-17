import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'product-detail',
  templateUrl: './products-detail.component.html',
  styles: [],
})
export class ProductsDetailComponent implements OnInit {
  product: Product;
  quantity:number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((response) => {
      if (response.productId) this._getProduct(response.productId);
    });
  }
  private _getProduct(pid: string) {
    this.productsService.getProductById(pid).subscribe((datas: Product) => {
      this.product = datas;
    });
  }
}
