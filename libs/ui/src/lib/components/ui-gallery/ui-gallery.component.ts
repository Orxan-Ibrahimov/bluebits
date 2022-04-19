/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-gallery',
  templateUrl: './ui-gallery.component.html',
  styles: [],
})
export class UiGalleryComponent implements OnInit {
  @Input() images: string[];
  mainImage: string;

  constructor() {}

  ngOnInit(): void {
    this.mainImage = this.images[0];
  }

  ChangeImageUrl(imageUrl: string) {
    if(imageUrl.length > 0)
    this.mainImage = imageUrl;
  }
}
