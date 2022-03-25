import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CategoriesService,
  Category,
  Product,
  ProductsService,
} from '@bluebits/my-products';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'admin-create-product',
  templateUrl: './create-product.component.html',
  styles: [],
})
export class CreateProductComponent implements OnInit {
  form: FormGroup;
  editable = false;
  myImage: string | ArrayBuffer;
  currentProductId:string;
  categories: Category[] = [];
  constructor(
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder,
    private productsServices: ProductsService,
    private messageService: MessageService,
    private router: Router,
    private activeRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      countInStock: [0, Validators.required],
      brand: ['', Validators.required],
      rating: [0, Validators.required],
      price: [0, Validators.required],
      numReviews: [0, Validators.required],
      category: ['', Validators.required],
      image: ['',Validators.required],
      richDescription: [''],
      isFeatured: [false],
      id:'',
      Images:[]
    });

    this._getCategories();
    this.activeRoute.params.subscribe((res) => {
      this.currentProductId = res.productId;
    });
    this._checkUpdate(this.currentProductId);
  }

  _checkUpdate(productId: string) {
    if (productId) {      
      this.editable = true;
      this.productsServices.getProductById(this.currentProductId).subscribe(res => {
        this.productForm.name.setValue(res.name);
        this.productForm.description.setValue(res.description);
        this.productForm.richDescription.setValue(res.richDescription);
        this.productForm.brand.setValue(res.brand);
        this.productForm.rating.setValue(res.rating);
        this.productForm.numReviews.setValue(res.numReviews);
        this.productForm.countInStock.setValue(res.countInStock);
        this.productForm.isFeatured.setValue(res.isFeatured);
        this.productForm.price.setValue(res.price);
        this.productForm.category.setValue(res.category);
        this.myImage = res.image;
        this.productForm.image.setValue(res.image);
        this.productForm.image.setValidators([]);
        this.productForm.image.updateValueAndValidity();
      });
    } else {
      this.editable = false;
    }
  }

  onSubmit() {
    if (this.form.valid) {      
     
      const productFormData = new FormData();
      Object.keys(this.productForm).map((key) => {
        productFormData.append(key,this.productForm[key].value);
      })

      if (this.editable) {
        this._editProduct(productFormData);
      }
      else
      this._addProduct(productFormData);
    }    
  }

  onImageUpload(event) { 
    const file = event.target.files[0];  

    if (file) {
      this.form.patchValue({ image: file });
      this.form.get('image').updateValueAndValidity();
      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.myImage = fileReader.result;
      };
      fileReader.readAsDataURL(file);
    }    
  }

  private _addProduct(product: FormData) {
    this.productsServices.addProduct(product).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Product was created!',
        });
        setTimeout(() => {
          this.router.navigate(['/products']);
        }, 2000);
      },
      (err) => {
        console.log(err);
        
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Product was not created!',
        });
      }
    );
  }

  private _editProduct(product: FormData){
    this.productsServices.updateProduct(product,this.currentProductId).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Prodduct was updated!',
        });
        setTimeout(() => {
          this.router.navigate(['/products']);
        }, 2000);
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Prodduct was not updated!',
        });
      }
    );
  }

  get productForm() {
    return this.form.controls;
  }
  private _getCategories() {
    this.categoriesService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
