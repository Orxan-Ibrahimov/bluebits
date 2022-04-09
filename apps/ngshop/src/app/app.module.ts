import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UIModule } from '@bluebits/ui';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { ProductModule } from '@bluebits/my-products';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'products', component: ProductListComponent},
]

@NgModule({
  
  declarations: [AppComponent, HomePageComponent, ProductListComponent, HeaderComponent, FooterComponent, NavMenuComponent],
  imports: [BrowserModule,
    ProductModule,
    RouterModule.forRoot(routes),UIModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    NavMenuComponent
  ],
})
export class AppModule {}
