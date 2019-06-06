import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PantPage } from '../pant/pant';
import { SkirtPage } from '../skirt/skirt';
import { WomenPage } from '../women/women';
import { MenPage } from '../men/men';
import { HomePage } from '../home/home';

/**
 * Generated class for the BasketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-basket',
  templateUrl: 'basket.html',
})
export class BasketPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasketPage');
  }

  goHomePage(){
    this.navCtrl.setRoot(HomePage);
  }
  goMenPage(){
    this.navCtrl.setRoot(MenPage);
  }
  goWomenPage(){
    this.navCtrl.setRoot(WomenPage);
  }
  goSkirtPage(){
    this.navCtrl.setRoot(SkirtPage);
  }
  goPantPage(){
    this.navCtrl.setRoot(PantPage);
  }
  goBasketPage(){
    this.navCtrl.setRoot(BasketPage);
  }
}
