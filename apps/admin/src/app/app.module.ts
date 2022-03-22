import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CategoriesListComponent } from './pages/categories/categories-list/categories-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesService } from '@bluebits/my-products';

import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCategoryComponent } from './pages/categories/create-category/create-category.component';
import { MessageService } from 'primeng/api';


const routes: Routes = [
  {path:'', component: ShellComponent,
  children: [
    {path:'dashboard', component: DashboardComponent},
    {path:'categories', component: CategoriesListComponent},
    {path:'categories/create-category', component: CreateCategoryComponent},
  ]
},

]

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, DashboardComponent, ShellComponent, SidebarComponent, CategoriesListComponent, CreateCategoryComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,    
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    CardModule,ToolbarModule,ButtonModule,TableModule,InputTextModule,ToastModule,
  ],
  providers: [CategoriesService,MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
