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

// const routes: Routes = [{ path: 'prod', component: ProductSearchComponent }];

@NgModule({
  declarations: [ProductSearchComponent, ProductCategoriesBannerComponent, FeaturedProductsComponent, ProductItemComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
  exports: [ProductSearchComponent, ProductCategoriesBannerComponent, FeaturedProductsComponent, ProductItemComponent]
})
export class ProductModule { }
