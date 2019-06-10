import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';

import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AdminPage } from '../admin/admin';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  responseData: any;
  data: any;
  username: string;
  password: string;
  loginCheck: any = null;
  constructor(public alertCtrl: AlertController, public authService: AuthServiceProvider, public loginService: LoginServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.authService.postData(null, "getUsers").then((result) => {
      this.responseData = result;
      this.data = this.responseData.data;
      console.log(this.data);
    }, (err) => {
      console.error(err);
    }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }
  login() {
    for (let i = 0; i < this.data.length; i++) {
      if (this.username == this.data[i].username) {
        this.loginCheck = i;
      } else {
        this.loginService.loginStatusOnSystem = "no";
      }
    }

    if (this.loginCheck != null) {
      if (this.password == this.data[this.loginCheck].password) {
        this.loginService.loginStatusOnSystem = "yes";
      } else {}
    } else {
      this.loginService.loginStatusOnSystem = "no";
    }

    if (this.loginService.loginStatusOnSystem == "yes") {
      if(this.data[this.loginCheck].status=="admin"){
        this.navCtrl.setRoot(AdminPage);
      }else if(this.data[this.loginCheck].status=="user"){
        this.navCtrl.setRoot(HomePage);
      }
    
    } else {
      const alert = this.alertCtrl.create({
        title: 'Login ผิดพลาด',
        buttons: ['ตกลง']
      });
      alert.present();
    }

  }
  homepage() {
    this.navCtrl.setRoot(HomePage);
  }
}
