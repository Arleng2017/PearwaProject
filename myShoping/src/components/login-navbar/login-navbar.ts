import { Component } from '@angular/core';
import { HomePage } from '../../pages/home/home';
import { MenPage } from '../../pages/men/men';
import { NavController, AlertController } from 'ionic-angular';
import { WomenPage } from '../../pages/women/women';
import { SkirtPage } from '../../pages/skirt/skirt';
import { PantPage } from '../../pages/pant/pant';
import { LoginPage } from '../../pages/login/login';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { BasketPage } from '../../pages/basket/basket';
import { MyorderPage } from '../../pages/myorder/myorder';
import { UserinfoeditPageModule } from '../../pages/userinfoedit/userinfoedit.module';
import { UserinfoeditPage } from '../../pages/userinfoedit/userinfoedit';
import { UserinfoPage } from '../../pages/userinfo/userinfo';

/**
 * Generated class for the LoginNavbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login-navbar',
  templateUrl: 'login-navbar.html'
})
export class LoginNavbarComponent {

  text: string;
  loginStatus:any;
  constructor(public alertCtrl:AlertController,public navCtrl: NavController,public loginService:LoginServiceProvider) {
    console.log('Hello LoginNavbarComponent Component');
    this.text = 'Hello World';
    this.loginStatus=this.loginService.loginStatusOnSystem;
    console.log(this.loginStatus);
  }

  login(){
    this.navCtrl.setRoot(LoginPage);
    console.log("OK");
    
  }
  logout(){
    this.loginService.loginStatusOnSystem="no";
    console.log(this.loginService.loginStatusOnSystem);
    this.navCtrl.setRoot(HomePage);
    
  }
  goBasket(){
    if(this.loginService.loginStatusOnSystem=="yes"){
      this.navCtrl.setRoot(BasketPage)
    }else if (this.loginService.loginStatusOnSystem=="no"){
      const alert=this.alertCtrl.create(
        {
          title:'กรุณาเข้าสู่ระบบ',
          buttons:['ตกลง']
        }
      );
      alert.present()
      this.navCtrl.setRoot(LoginPage);
    }
  }

  goOrder(){
    if(this.loginService.loginStatusOnSystem=="yes"){
      this.navCtrl.setRoot(MyorderPage)
    }else if (this.loginService.loginStatusOnSystem=="no"){
      const alert=this.alertCtrl.create(
        {
          title:'กรุณาเข้าสู่ระบบ',
          buttons:['ตกลง']
        }
      );
      alert.present()
      this.navCtrl.setRoot(LoginPage);
    }
  }

  goMyProflie(){
    this.navCtrl.setRoot(UserinfoPage);
  }

 
  // Close the dropdown if the user clicks outside of it
  
   

}
