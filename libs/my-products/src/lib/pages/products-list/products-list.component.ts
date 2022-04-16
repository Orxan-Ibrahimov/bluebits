import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../models/category';
import { Product } from '../../models/product';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'product-list',
  templateUrl: './products-list.component.html',
  styles: [],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  isCategoryPage:boolean;

  constructor(
    private productsService: ProductsService,
    private categoryService: CategoriesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((myParams) => {
      myParams.categoryId ? this._getProducts([myParams.categoryId]) : this._getProducts();
      myParams.categoryId ? this.isCategoryPage = true : this.isCategoryPage = false;

    });
    this._getCategories();
  }
  private _getCategories() {
    this.categoryService.getCategories().subscribe((response: Category[]) => {
      this.categories = response;
    });
  }

  private _getProducts(categories?: string[]) {
    this.productsService
      .getProducts(categories)
      .subscribe((datas: Product[]) => {
        this.products = datas;
      });
  }

  CategoryFilter() {
    const selectedSategories = this.categories
      .filter((category) => category.checked)
      .map((response) => {
        return response.id;
      });
    this._getProducts(selectedSategories);
  }
}
