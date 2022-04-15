import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'categories-banner',
  templateUrl: './product-categories-banner.component.html',
  styles: [
  ]
})
export class ProductCategoriesBannerComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(datas => {
      this.categories = datas;
    });
  }

}
