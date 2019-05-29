import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenPage } from '../men/men';
import { WomenPage } from '../women/women';
import { PantPage } from '../pant/pant';
import { HomePage } from '../home/home';

/**
 * Generated class for the SkirtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skirt',
  templateUrl: 'skirt.html',
})
export class SkirtPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkirtPage');
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

}
