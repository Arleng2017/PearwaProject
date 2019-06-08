import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  responseData: any;
  data: any;
  cfpassword: any;
  user = {
    username: null,
    password: null,
    name: null,
    lastname: null,
    email: null,
    tel: null,
    status: null
  }
  userData = { "username": "", "password": "", "name": "", "email": "" };
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider) {
    this.getLogin();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }


  signup() {
    console.log(this.userData);
    this.user.status="user";
    if (this.user.username != null && this.user.password != null && this.user.name != null &&
      this.user.lastname != null && this.user.email != null && this.user.tel != null && this.cfpassword != "") {
      if (this.user.password == this.cfpassword) {
        this.authService.postData(this.user, 'addUser').then((result) => {
          this.responseData = result;
          const alert = this.alertCtrl.create({
            title: 'สร้างบัญชีสำเร็จ',
            buttons: [
              {
                text: 'ตกลง'
              }
            ]
          });
          alert.present();
          this.navCtrl.setRoot(LoginPage);
        }, (err) => {

        });
      } else if (this.user.password != this.cfpassword) {
        const alert2 = this.alertCtrl.create({
          title: 'รหัสผ่านไม่ตรงกัน',
          buttons: [
            {
              text: 'ตกลง'
            }
          ]
        });
        alert2.present();
      }
    } else {
      const alert3 = this.alertCtrl.create({
        title: 'กรอกข้อมูลให้ครบ',
        buttons: [
          {
            text: 'ตกลง'
          }
        ]
      });
      alert3.present();
    }
  }

  getLogin() {

    this.authService.postData(this.user, "getMen").then((result) => {
      this.responseData = result;
      console.log(result)
      if (this.responseData.shop) {
        this.data = this.responseData.shop;
        console.log(this.data);

      }
      else {
        console.log(this.responseData, "not conn");
      }
    }, (err) => {
      console.error(err);
    });
  }
  homepage() {
    this.navCtrl.setRoot(HomePage);
  }
  login(){
    this.navCtrl.setRoot(LoginPage);
  }
}
