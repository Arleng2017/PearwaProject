import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceProvider } from '../auth-service/auth-service';

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {
  loginStatusOnSystem:any="no";
  
  public user = {
    id:null,
    name: null,
    lastname: null,
    email: null,
    tel: null,
    status: null
  }

  constructor() {
    console.log('Hello LoginServiceProvider Provider');
    // return  this.loginStatusOnSystem;
  }
  



}
