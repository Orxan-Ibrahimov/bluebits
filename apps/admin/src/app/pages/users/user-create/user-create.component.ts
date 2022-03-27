/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-var */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UsersService } from '@bluebits/my-users';
import { MessageService } from 'primeng/api';
import * as countriesLib from 'i18n-iso-countries'

declare const require;


@Component({
  selector: 'admin-user-create',
  templateUrl: './user-create.component.html',
  styles: [
  ]
})

export class UserCreateComponent implements OnInit {
  constructor(private formBuilder:FormBuilder,
    private usersService:UsersService,
    private messageService:MessageService,
    private router:Router,
    private activeRoute:ActivatedRoute) { }

  editable = false;
  form:FormGroup;
  currentUserId:string;
  countries = [];
  
  ngOnInit(): void {
    this._initUsers();
    this._checkUpdate();
this._getCountries();
  }

 private _initUsers(){
    this.form = this.formBuilder.group({
      name: ['', Validators.required],      
      email: ['', [Validators.required,Validators.email]],      
      passwordHash: [''],      
      country: [''],      
      zip: [''],      
      city: [''],      
      apartment: [''],      
      phone: ['', Validators.required],      
      street: [''],      
      isAdmin: [false]
    });
  }
  onSubmit(){
    const user : User = {
      id: this.currentUserId,
      name: this.userData.name.value,
      email: this.userData.email.value,
      country: this.userData.country.value,
      zip: this.userData.zip.value,
      city: this.userData.city.value,
      apartment: this.userData.apartment.value,
      street: this.userData.street.value,
      isAdmin: this.userData.isAdmin.value,
      passwordHash: this.userData.passwordHash.value,
      phone: this.userData.phone.value,
    }

    if(this.editable)
    {
      this._updateUser(user);
    }
    else{
      this._addUser(user);
    }
 
  }

  private _getCountries(){
     countriesLib.registerLocale(require("i18n-iso-countries/langs/en.json"));
     this.countries = Object.entries(countriesLib.getNames("en", {select: "official"})).map(res => {
       return {
         id: res[0],
         name: res[1],
       }
     })
     console.log(this.countries);
     
    //  countriesLib.getName("US", "en");

    
  }
private _addUser(user:User){
  this.usersService.addUser(user).subscribe(data => {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: `User ${data.name} was created!`,
    });
    setTimeout(() => {
      this.router.navigate(['/users']);
    }, 2000);
  }, 
  () => {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'User was not created!',
    });
  });  
}

private _updateUser(user:User){
  console.log(user);   
  this.usersService.updateUser(user).subscribe(data => {
    console.log(data);
    
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: `User ${data.name} was updated!`,
    });
    setTimeout(() => {
      this.router.navigate(['/users']);
    }, 2000);
  }, 
  () => {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'User was not updated!',
    });
  }); 
}

get userData(){
  return this.form.controls
}

private _checkUpdate(){
  this.activeRoute.params.subscribe(res => {
    if (res.userId) {  
      this.editable = true;    
      this.currentUserId = res.userId;    
      this.usersService.getUserById(this.currentUserId).subscribe(user => {
      // this.userData.id.setValue(this.currentUserId);            
      this.userData.name.setValue(user.name);   
      this.userData.email.setValue(user.email);   
      this.userData.country.setValue(user.country);   
      this.userData.zip.setValue(user.zip);   
      this.userData.city.setValue(user.city);   
      this.userData.phone.setValue(user.phone);   
      this.userData.apartment.setValue(user.apartment);   
      this.userData.street.setValue(user.street);   
      this.userData.isAdmin.setValue(user.isAdmin);    
      this.userData.passwordHash.setValidators([]);    
      })
    } else {
      this.editable = false;
    }
  })
}


}
