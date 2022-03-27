import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UsersService } from '@bluebits/my-users';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'admin-user-list',
  templateUrl: './user-list.component.html',
  styles: [
  ]
})
export class UserListComponent implements OnInit {

  users:User[] = [];



  constructor(
    private usersService:UsersService,
    private confirmationService:ConfirmationService,
    private messageService:MessageService,
    private router:Router) { }


  ngOnInit(): void {
    this._UserList();
  }


  private _UserList(){
   this.usersService.getUsers().subscribe(data => {
     this.users = data;
   });
  }

  deleteUser(userId:string){
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
  }
})
}

editUser(userId:string){
  this.router.navigateByUrl(`users/update/${userId}`);
}
}