import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { ProductModule } from '@bluebits/my-products';
import { UiModule } from '@bluebits/ui';
import { HttpClientModule } from '@angular/common/http';
import { OrderModule } from '@bluebits/my-orders';

const routes: Routes = [
  { path: '', component: HomePageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    NavMenuComponent,
  ],
  imports: [
    BrowserModule,
    ProductModule,
    HttpClientModule,
    UiModule,
    OrderModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NavMenuComponent],
})
export class AppModule {}
