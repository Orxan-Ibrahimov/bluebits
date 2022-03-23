import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService, Category } from '@bluebits/my-products';

@Component({
  selector: 'admin-create-product',
  templateUrl: './create-product.component.html',
  styles: [
  ]
})
export class CreateProductComponent implements OnInit {
  
  form: FormGroup;
  editable = false;
  currentCategoryId: string;
  categories:Category[] = [];
  constructor(private categoriesService:CategoriesService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      countInStock: [0, Validators.required],
      brand: ['', Validators.required],
      rating: [0, Validators.required],
      price: [0, Validators.required],
      category: ['', Validators.required],
      image: [''],
      richDescription: [''],
      isFeatured: [false],
    });
    
    this._getCategories();
  }

  onSubmit(){
    console.log('okay');    
  }

  private _getCategories(){
    this.categoriesService.getCategories().subscribe( data => {
      this.categories = data;
    });
  }
}
