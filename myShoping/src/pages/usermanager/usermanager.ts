import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProductmanagerPage } from '../productmanager/productmanager';
import { OrdermanagerPage } from '../ordermanager/ordermanager';
import { HomePage } from '../home/home';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { EdituserPage } from '../edituser/edituser';
import { LoginServiceProvider } from '../../providers/login-service/login-service';

/**
 * Generated class for the UsermanagerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usermanager',
  templateUrl: 'usermanager.html',
})
export class UsermanagerPage {
  responseData: any;
  data: any;
  constructor(public loginService: LoginServiceProvider, public alertCtrl: AlertController, public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.getUsers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsermanagerPage');
  }
  goProductManagerPage() {
    this.navCtrl.setRoot(ProductmanagerPage);
  }
  goUserManagerPage() {
    this.navCtrl.setRoot(UsermanagerPage);
  }
  goOrderManagerPage() {
    this.navCtrl.setRoot(OrdermanagerPage);
  }
  logout() {
    this.navCtrl.setRoot(HomePage);
    this.loginService.loginStatusOnSystem = "no";
  }

  getUsers() {
    this.authService.postData(null, "getUsers").then((result) => {
      this.responseData = result;
      this.data = this.responseData.data;
      console.log(this.data);
    }, (err) => {
      console.error(err);
    }
    );
  }
  delUser(id: string) {

    const alert = this.alertCtrl.create({
      title: 'ต้องการลบหรือไม่',
      buttons: [
        {
          text: 'ยกเลิก'
        }, {
          text: 'ตกลง',
          handler: data => {
            console.log(id);
            this.authService.postData(id, "deleteUser").then((result) => {
              this.getUsers();
            }, (err) => {
              console.error(err);
            });

          }
        }
      ]
    });
    alert.present();
  }

  editUser(id: string) {
    this.navCtrl.push(EdituserPage, { id: id });

  }
  test() {
    this.authService.postData(null, "getUsers").then((result) => {
      this.responseData = result;
      this.data = this.responseData.user;
      console.log(this.data);
    }, (err) => {
      console.error(err);
    }
    );
  }

}
