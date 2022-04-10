import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCategoriesBannerComponent } from './components/product-categories-banner/product-categories-banner.component';

// const routes: Routes = [{ path: 'prod', component: ProductSearchComponent }];

@NgModule({
  declarations: [ProductSearchComponent, ProductCategoriesBannerComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ProductSearchComponent, ProductCategoriesBannerComponent]
})
export class ProductModule { }
