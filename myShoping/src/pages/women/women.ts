import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenPage } from '../men/men';
import { SkirtPage } from '../skirt/skirt';
import { PantPage } from '../pant/pant';
import { HomePage } from '../home/home';
import { BasketPage } from '../basket/basket';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the WomenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-women',
  templateUrl: 'women.html',
})
export class WomenPage {
  responseData: any;
  data:any;
  constructor(public authService:AuthServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.getWomens();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WomenPage');
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
 
  getWomens(){
    this.authService.postData(null, "getWomens").then((result)=>{
      this.responseData = result;
      this.data=this.responseData.women;
      console.log(this.data);
    }, (err) => {
      console.error(err);
    }
     );
  }
}
