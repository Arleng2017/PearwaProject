import { Component } from '@angular/core';

/**
 * Generated class for the LoginNavbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login-navbar',
  templateUrl: 'login-navbar.html'
})
export class LoginNavbarComponent {

  text: string;

  constructor() {
    console.log('Hello LoginNavbarComponent Component');
    this.text = 'Hello World';
  }

}
