import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from '@bluebits/my-products';

@Component({
  selector: 'admin-categories-list',
  templateUrl: './categories-list.component.html',
  providers:[CategoriesService]
})
export class CategoriesListComponent implements OnInit {

  categories:Category[] = [];
  constructor(private categoryService:CategoriesService) { }

  ngOnInit(): void {
    // this.categoryService.getCategories().subscribe(data => {
    //   this.categories = data;
    // });
  }

}
