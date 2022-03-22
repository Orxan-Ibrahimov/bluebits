import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from '@bluebits/my-products';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'admin-categories-list',
  templateUrl: './categories-list.component.html',
  providers: [CategoriesService],
})
export class CategoriesListComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoryService: CategoriesService,private messageService:MessageService,private confirmationService:ConfirmationService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  deleteCategory(categoryId: string) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to remove this category?',
      header: 'Delete?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.categoryService.deleteCategory(categoryId).subscribe((res) => {
          this.messageService.add({severity:'success', summary:'Success', detail:'Category was deleted!'});
          this.getCategories();
        });     
       }     
    });
  }

  private getCategories(){
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
