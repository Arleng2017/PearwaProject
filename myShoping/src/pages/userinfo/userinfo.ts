import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { UserinfoeditPage } from '../userinfoedit/userinfoedit';
import { HomePage } from '../home/home';

/**
 * Generated class for the UserinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userinfo',
  templateUrl: 'userinfo.html',
})
export class UserinfoPage {

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
  constructor(public alertCtrl:AlertController,public loginService : LoginServiceProvider,public authService:AuthServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.getUserInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserinfoPage');
  }
  editUser(){
    this.navCtrl.setRoot(UserinfoeditPage);
  }


  getUserInfo() {
    this.authService.postData(this.loginService.user.id , "getUserById").then((result) => {
      this.responseData = result;
      this.data = this.responseData.data;
      this.user.id = this.id;
      this.user.name = this.data[0].name;
      this.user.lastname = this.data[0].lastname;
      this.user.email = this.data[0].email;
      this.user.tel = this.data[0].tel;
      console.log(this.data);
    }, (err) => {
      console.error(err);
    });

  }

  homepage() {
    // const alert = this.alertCtrl.create({
    //   title: 'ละทิ้งการแก้ไขหรือไม่',
    //   buttons: [
    //     {
    //       text: 'ยกเลิก'
    //     }, {
    //       text: 'ตกลง',
    //       handler: data => {
            this.navCtrl.setRoot(HomePage);
    //       }
    //     }
    //   ]

    // });
    // alert.present();
  }
  goHome(){
    this.navCtrl.setRoot(HomePage);
  }

}
