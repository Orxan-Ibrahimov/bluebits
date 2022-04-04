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
import { CategoriesService, ProductsService } from '@bluebits/my-products';

import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ColorPickerModule} from 'primeng/colorpicker';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputSwitchModule} from 'primeng/inputswitch';
import {DropdownModule} from 'primeng/dropdown';
import {EditorModule} from 'primeng/editor';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { TagModule } from 'primeng/tag';
import {FieldsetModule} from 'primeng/fieldset';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCategoryComponent } from './pages/categories/create-category/create-category.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { CreateProductComponent } from './pages/products/create-product/create-product.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserCreateComponent } from './pages/users/user-create/user-create.component';
import { OrdersListComponent } from './pages/orders/orders-list/orders-list.component';
import { OrderDetailsComponent } from './pages/orders/order-details/order-details.component';
import { UsersModule } from '@bluebits/my-users';


const routes: Routes = [
  {path:'', component: ShellComponent,
  children: [
    {path:'dashboard', component: DashboardComponent},
    {path:'categories', component: CategoriesListComponent},
    {path:'categories/create-category', component: CreateCategoryComponent},
    {path:'categories/update/:categoryId', component: CreateCategoryComponent},
    {path:'products', component: ProductsListComponent},
    {path:'products/create-product', component: CreateProductComponent},
    {path:'products/update/:productId', component: CreateProductComponent},
    {path:'users', component: UserListComponent},
    {path:'users/create-user', component: UserCreateComponent},
    {path:'users/update/:userId', component: UserCreateComponent},
    {path:'orders', component: OrdersListComponent},
    {path:'orders/:orderId', component: OrderDetailsComponent},
  ] 
},

]

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, DashboardComponent, ShellComponent, SidebarComponent, 
    CategoriesListComponent, CreateCategoryComponent, ProductsListComponent, CreateProductComponent, UserListComponent, UserCreateComponent, OrdersListComponent,OrderDetailsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    UsersModule,
    ReactiveFormsModule,    
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    CardModule,ToolbarModule,ButtonModule,TableModule,InputTextModule,ToastModule,ConfirmDialogModule,
    ColorPickerModule,InputNumberModule,InputSwitchModule,DropdownModule,EditorModule,InputTextareaModule,
    TagModule,FieldsetModule,
  ],
  providers: [CategoriesService,ProductsService,MessageService,ConfirmationService],
  bootstrap: [AppComponent],
})

export class AppModule {}
