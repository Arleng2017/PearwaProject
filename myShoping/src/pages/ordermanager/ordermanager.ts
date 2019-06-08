import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductmanagerPage } from '../productmanager/productmanager';
import { UsermanagerPage } from '../usermanager/usermanager';
import { HomePage } from '../home/home';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
  }

}
