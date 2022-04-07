/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { LocaleStorageService } from '../../services/locale-storage.service';

@Component({
  selector: 'admin-auth',
  templateUrl: './auth.component.html',
  styles: [],
})
export class AuthComponent implements OnInit {
  form?: FormGroup;
  isSubmitted = false;
  authError = false;
  authMessage = 'Email or Password are wrong';
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router:Router,
    private tokenStorage:LocaleStorageService
  ) {}

  ngOnInit(): void {
    this._initAuthForm();
  }
  private _initAuthForm() {
    this.form = this.formBuilder.group({
      email: ['orxan@gmail.com', Validators.email],
      passwordHash: ['123456', Validators.required],
    });
  }

  onSubmit() {
    this.isSubmitted = true;

    if(this.form?.invalid) return;

    this.authService
      .login(
        this.getAuthForm?.email.value,
        this.getAuthForm?.passwordHash.value
      )
      .subscribe(
        (response: User) => {
          console.log(response.token);
          this.tokenStorage.setItem(response.token);
          this.router.navigateByUrl('/');
        },
        () => {
          this.authError = true;
          this.authMessage = 'error occurs in tte server';
        }
      );
  }

  get getAuthForm() {
    return this.form?.controls;
  }
}
