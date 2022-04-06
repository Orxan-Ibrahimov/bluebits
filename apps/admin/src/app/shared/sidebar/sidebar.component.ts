/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { LocaleStorageService } from '@bluebits/my-users';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private tokenStorage:LocaleStorageService) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}

  logout(){
    this.tokenStorage.removeItem();
  }

}
