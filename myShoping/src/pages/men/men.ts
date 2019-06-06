import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WomenPage } from '../women/women';
import { SkirtPage } from '../skirt/skirt';
import { PantPage } from '../pant/pant';
import { HomePage } from '../home/home';
import { BasketPage } from '../basket/basket';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the MenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-men',
  templateUrl: 'men.html',
})
export class MenPage {
  responseData: any;
  data:any;
  constructor(public authService:AuthServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.getMens();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenPage');
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
  getMens(){  
    this.authService.postData(null, "getMens").then((result)=>{
      this.responseData = result;
      this.data=this.responseData.men;
      console.log(this.data);
    }, (err) => {
      console.error(err);
    }
     );
  }
}
