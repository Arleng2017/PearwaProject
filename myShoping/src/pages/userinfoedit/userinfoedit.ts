import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { UserinfoPage } from '../userinfo/userinfo';
import { HomePage } from '../home/home';

/**
 * Generated class for the UserinfoeditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userinfoedit',
  templateUrl: 'userinfoedit.html',
})
export class UserinfoeditPage {
  id: string;
  responseData: any;
  data: any;
  user = {
    id: null,
    name: null,
    lastname: null,
    email: null,
    tel: null
  }
  constructor(public alertCtrl: AlertController, public loginService: LoginServiceProvider, public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.getUserInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserinfoeditPage');
  }

  getUserInfo() {
    this.authService.postData(this.loginService.user.id, "getUserById").then((result) => {
      this.responseData = result;
      this.data = this.responseData.data;
      this.user.id = this.loginService.user.id;
      this.user.name = this.data[0].name;
      this.user.lastname = this.data[0].lastname;
      this.user.email = this.data[0].email;
      this.user.tel = this.data[0].tel;
      console.log(this.data);
    }, (err) => {
      console.error(err);
    });

  }
  test() {
    

  }
  homepage() {
    const alert = this.alertCtrl.create({
      title: 'ละทิ้งการแก้ไขหรือไม่',
      buttons: [
        {
          text: 'ยกเลิก'
        }, {
          text: 'ตกลง',
          handler: data => {
            this.navCtrl.setRoot(HomePage);
          }
        }
      ]

    });
    alert.present();
  }



  updateUser() {
    const alert = this.alertCtrl.create({
      title: 'ต้องการบันทึกหรือไม่',
      buttons: [
        {
          text: 'ยกเลิก'
        }, {
          text: 'ตกลง',
          handler: data => {
            this.authService.postData(this.user, "updateUser").then((result) => {
              this.responseData = result;
              console.log(result)
              this.navCtrl.setRoot(UserinfoPage);
              // this.navCtrl.pop();
              if (this.responseData.pattient) {
                console.log(this.responseData, "sss");
              }
              else {
                console.log(this.responseData, "not conn");
              }
            });
          }
        }
      ]
    });
    alert.present();

  }
  back(){
    const alert = this.alertCtrl.create({
      title: 'ละทิ้งการแก้ไขหรือไม่',
      buttons: [
        {
          text: 'ยกเลิก'
        }, {
          text: 'ตกลง',
          handler: data => {
            // this.navCtrl.setRoot(HomePage);
            this.navCtrl.setRoot(UserinfoPage);
          }
        }
      ]

    });
    alert.present();
    
  }

}
