import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UsersService } from '@bluebits/my-users';
import { ConfirmationService, MessageService } from 'primeng/api';
import * as countriesLib from 'i18n-iso-countries';

declare const require;

@Component({
  selector: 'admin-user-list',
  templateUrl: './user-list.component.html',
  styles: [],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  countries = [];

  constructor(
    private usersService: UsersService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._UserList();
  }

  private _UserList() {
    this.usersService.getUsers().subscribe((data) => {
      this._getCountries();
      this.users = data;
      this.users.map((user) => {
        user.country = this.countries.find((u) => u.id == user.country)?.name;
      });
    });
  }

  deleteUser(userId: string) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to remove this user?',
      header: 'Delete?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.usersService.RemoveUser(userId).subscribe((res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `User ${res.name} was deleted!`,
          });
          this._UserList();
        });
      },
    });
  }

  private _getCountries() {
    countriesLib.registerLocale(require('i18n-iso-countries/langs/en.json'));
    this.countries = Object.entries(
      countriesLib.getNames('en', { select: 'official' })
    ).map((res) => {
      return {
        id: res[0],
        name: res[1],
      };
    });
  }

  editUser(userId: string) {
    this.router.navigateByUrl(`users/update/${userId}`);
  }
}
