import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';

import {ButtonModule} from 'primeng/button';
import { UiGalleryComponent } from './components/ui-gallery/ui-gallery.component';


@NgModule({
  declarations: [
    BannerComponent,
    UiGalleryComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports:[BannerComponent, UiGalleryComponent]
})
export class UiModule { }
