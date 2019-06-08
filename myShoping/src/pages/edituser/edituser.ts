import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { UsermanagerPage } from '../usermanager/usermanager';

/**
 * Generated class for the EdituserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edituser',
  templateUrl: 'edituser.html',
})
export class EdituserPage {
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
  constructor(public alertCtrl: AlertController, public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get('id');
    this.getUserInfo();
    console.log(this.id);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EdituserPage');

  }
  getUserInfo() {
    this.authService.postData(this.id, "getUserById").then((result) => {
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
              this.navCtrl.setRoot(UsermanagerPage);
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


}
