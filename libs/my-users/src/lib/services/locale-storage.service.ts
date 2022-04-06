import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocaleStorageService {  
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  tokenName = 'token';

  getItem() {
   if(localStorage.getItem(this.tokenName))
   {
     return localStorage.getItem(this.tokenName);
   }
   return ""
  }

  setItem(token: string) {
    localStorage.setItem(this.tokenName,token);
  }

  removeItem() {
    localStorage.removeItem(this.tokenName);
  }

}