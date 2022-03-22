import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CategoriesListComponent } from './pages/categories/categories-list/categories-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesService } from '@bluebits/my-products';

const routes: Routes = [
  {path:'', component: ShellComponent,
  children: [
    {path:'dashboard', component: DashboardComponent},
    {path:'categories', component: CategoriesListComponent}
  ]
},

]

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, DashboardComponent, ShellComponent, SidebarComponent, CategoriesListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [CategoriesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
