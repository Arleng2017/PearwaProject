import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductmanagerPage } from '../productmanager/productmanager';
import { UsermanagerPage } from '../usermanager/usermanager';
import { OrdermanagerPage } from '../ordermanager/ordermanager';
import { HomePage } from '../home/home';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  responseData: any;
  data: any;
  id:string="1";
  constructor(public authService:AuthServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.authService.postData(null, "getPants").then((result) => {
      this.responseData = result;
      this.data = this.responseData.pants;
      console.log(this.data);
    }, (err) => {
      console.error(err);
    }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }
  goProductManagerPage(){
    this.navCtrl.push(ProductmanagerPage);
  }
  goUserManagerPage(){
    this.navCtrl.push(UsermanagerPage);
  }
  goOrderManagerPage(){
    this.navCtrl.push(OrdermanagerPage);
  }
  logout(){
    this.navCtrl.setRoot(HomePage);
  }

}
