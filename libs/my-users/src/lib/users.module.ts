import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import {ButtonModule} from 'primeng/button';
// import { UiGalleryComponent } from './components/ui-gallery/ui-gallery.component';

const routes: Routes = [{ path: 'login', component: AuthComponent }];

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,    
    RouterModule.forChild(routes),
  ],
  // exports: [
  //   UiGalleryComponent
  // ],
})
export class UsersModule {}
