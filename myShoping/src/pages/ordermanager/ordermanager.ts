import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductmanagerPage } from '../productmanager/productmanager';
import { UsermanagerPage } from '../usermanager/usermanager';
import { HomePage } from '../home/home';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginServiceProvider } from '../../providers/login-service/login-service';

/**
 * Generated class for the OrdermanagerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ordermanager',
  templateUrl: 'ordermanager.html',
})
export class OrdermanagerPage {
  responseData:any;
  data:any;
  constructor(public loginService:LoginServiceProvider,public authService:AuthServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
  this.getOrderList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdermanagerPage');
  }
  goProductManagerPage(){
    this.navCtrl.setRoot(ProductmanagerPage);
  }
  goUserManagerPage(){
    this.navCtrl.setRoot(UsermanagerPage);
  }
  goOrderManagerPage(){
    this.navCtrl.setRoot(OrdermanagerPage);
  }
  logout(){
    this.navCtrl.setRoot(HomePage);
    this.loginService.loginStatusOnSystem="no";
  }
  getOrderList(){
    this.authService.postData(null, "getAllOrderList").then((result) => {
      this.responseData = result;
      this.data = this.responseData.data;
      console.log(this.data);
    }, (err) => {
      console.error(err);
    });
  }

}
