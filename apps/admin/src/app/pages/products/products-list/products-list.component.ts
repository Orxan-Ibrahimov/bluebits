import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService, Product, ProductsService } from '@bluebits/my-products';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'admin-products-list',
  templateUrl: './products-list.component.html',
  styles: [
  ]
})
export class ProductsListComponent implements OnInit {

  constructor(private productsService:ProductsService,
    private router:Router,
    private confirmationService:ConfirmationService,
    private categoryService:CategoriesService,
    private messageService:MessageService) { }
 products:Product[];

  ngOnInit(): void {
    this._getProducts();
  }

  updateProduct(productId: string) {
    this.router.navigateByUrl(`/products/update/${productId}`);    
  }

  private _getProducts(){
    this.productsService.getProducts().subscribe(datas=> {
      this.products = datas;
    });
  }

  deleteProduct(productId: string) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to remove this product?',
      header: 'Delete?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productsService.deleteProduct(productId).subscribe((res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `Product ${res.name} was deleted!`,
          });
          this._getProducts();
        });
      },
    });
  }

}
