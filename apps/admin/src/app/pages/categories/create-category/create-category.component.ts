import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService, Category } from '@bluebits/my-products';
import { MessageService } from 'primeng/api';
import { Observable, pipe, timer } from 'rxjs';



@Component({
  selector: 'admin-create-category',
  templateUrl: './create-category.component.html',
  styles: [
  ]
})
export class CreateCategoryComponent implements OnInit {

  form:FormGroup;
  
  constructor(private formBuilder:FormBuilder, 
    private categoriesService:CategoriesService,
    private router:Router,
    private messageService:MessageService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      icon: ['', Validators.required],
      color: ['#fff']
    });
  }

  onSubmit(){
    if (this.form.valid) {
     const category: Category = {
       name: this.categoryData.name.value,
       icon: this.categoryData.icon.value,
       color: this.categoryData.color.value,
       id: ''
     };

      this.categoriesService.AddCategory(category).subscribe( res => {
        
        this.messageService.add({severity:'success', summary:'Success', detail:'Category was created!'});
       setTimeout(() => {
         this.router.navigate(['/categories']);
       }, 2000);
      },
      () => {
        this.messageService.add({severity:'error', summary:'Error', detail:'Category was not created!'});
      }           
      );         
    }    
  }

  get categoryData(){
    return this.form.controls;
  }

}
