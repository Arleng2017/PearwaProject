import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import { MenPage } from '../men/men';
import { WomenPage } from '../women/women';
import { SkirtPage } from '../skirt/skirt';
import { PantPage } from '../pant/pant';
import { BasketPage } from '../basket/basket';

/**
 * Generated class for the MyorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myorder',
  templateUrl: 'myorder.html',
})
export class MyorderPage {
  responseData: any;
  data: any;
  priceTotal:number=0;
  constructor(public authService: AuthServiceProvider, public loginService: LoginServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.getMyOrder();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyorderPage');
  }

  goHomePage() {
    this.navCtrl.setRoot(HomePage);
  }
  goMenPage() {
    this.navCtrl.setRoot(MenPage);
  }
  goWomenPage() {
    this.navCtrl.setRoot(WomenPage);
  }
  goSkirtPage() {
    this.navCtrl.setRoot(SkirtPage);
  }
  goPantPage() {
    this.navCtrl.setRoot(PantPage);
  }
  goBasketPage() {
    this.navCtrl.setRoot(BasketPage);
  }


  getMyOrder() {
    this.authService.postData(this.loginService.user.id, "getOrderList").then((result) => {
      this.responseData = result;
      this.data = this.responseData.data;
      for (let index = 0; index < this.data.length; index++) {
        this.priceTotal=Number(this.priceTotal)+Number(this.data[index].price);
        
      }
      console.log(this.data);
    }, (err) => {
      console.error(err);
    }
    );
  }

}
