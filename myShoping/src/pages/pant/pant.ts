import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MenPage } from '../men/men';
import { WomenPage } from '../women/women';
import { SkirtPage } from '../skirt/skirt';
import { HomePage } from '../home/home';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { BasketPage } from '../basket/basket';
import { LoginPage } from '../login/login';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
/**
 * Generated class for the PantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pant',
  templateUrl: 'pant.html',
})
export class PantPage {

  responseData: any;
  data: any;
  user = {
    id_user: null
  }
  constructor(public alertCtrl:AlertController,public loginService:LoginServiceProvider,public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider) {
    this.getPants();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PantPage');
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
  getPants() {
    this.authService.postData(null, "getPants").then((result) => {
      this.responseData = result;
      this.data = this.responseData.data;
      console.log(this.data);
    }, (err) => {
      console.error(err);
    }
    );
  }
  addToBasket(){
    if(this.loginService.loginStatusOnSystem=="yes"){

    }else{
      const alert=this.alertCtrl.create({
        title:'กรุณาเข้าสู่ระบบ',
        buttons:[{
          text:'ตกลง'
        }]
      });
      alert.present();
      this.navCtrl.setRoot(LoginPage);
    }
  }
}
