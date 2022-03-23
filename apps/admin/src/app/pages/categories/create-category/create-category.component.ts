import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService, Category } from '@bluebits/my-products';
import { MessageService } from 'primeng/api';
import { Observable, pipe, timer } from 'rxjs';

@Component({
  selector: 'admin-create-category',
  templateUrl: './create-category.component.html',
  styles: [],
})
export class CreateCategoryComponent implements OnInit {
  form: FormGroup;
  editable = false;
  currentCategoryId: string;

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private router: Router,
    private messageService: MessageService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      icon: ['', Validators.required],
      color: ['#fff'],
    });
    this.activeRoute.params.subscribe((res) => {
      this.currentCategoryId = res.categoryId;
    });
    this._checkUpdate(this.currentCategoryId);
  }

  onSubmit() {
    if (this.form.valid) {
      const category: Category = {
        name: this.categoryData.name.value,
        icon: this.categoryData.icon.value,
        color: this.categoryData.color.value,
        id: this.currentCategoryId
      };
      
      if (category.id) {             
        this._editCategory(category);
      } else {
        this._addCategory(category);
      }
    }
  }

  _checkUpdate(categoryId: string) {
    if (categoryId) {      
      this.editable = true;
      this.categoriesService.getCategoryById(this.currentCategoryId).subscribe(res => {
        this.categoryData.name.setValue(res.name);
        this.categoryData.icon.setValue(res.icon);
        this.categoryData.color.setValue(res.color);
      });
    } else {
      this.editable = false;
    }
  }

  get categoryData() {
    return this.form.controls;
  }

  private _editCategory(category:Category){
    this.categoriesService.editCategory(category).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Category was updated!',
        });
        setTimeout(() => {
          this.router.navigate(['/categories']);
        }, 2000);
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Category was not updated!',
        });
      }
    );
  }

  private _addCategory(category:Category){
    this.categoriesService.AddCategory(category).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Category was created!',
        });
        setTimeout(() => {
          this.router.navigate(['/categories']);
        }, 2000);
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Category was not created!',
        });
      }
    );  
  }
}
