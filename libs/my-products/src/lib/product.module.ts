import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCategoriesBannerComponent } from './components/product-categories-banner/product-categories-banner.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import {ButtonModule} from 'primeng/button';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { RouterModule, Routes } from '@angular/router';
import {CheckboxModule} from 'primeng/checkbox';

const routes: Routes = [{ path: 'products', component: ProductsListComponent }];

@NgModule({
  declarations: [ProductSearchComponent, ProductCategoriesBannerComponent, FeaturedProductsComponent, ProductItemComponent, ProductsListComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forChild(routes),
    FormsModule,
    CheckboxModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
  exports: [ProductSearchComponent, ProductCategoriesBannerComponent, FeaturedProductsComponent, ProductItemComponent, ProductsListComponent]
})
export class ProductModule { }
