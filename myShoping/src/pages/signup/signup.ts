import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  responseData: any;
  data:any;
  user={
    id_user:'1'
  }
  userData = { "username": "", "password": "", "name": "", "email": "" };
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider) {
    this.getLogin();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }


  signup() {
    console.log(this.userData);
      this.authService.postData(this.user,'signup').then((result) => {
       this.responseData = result;
       if(this.responseData.userData){
       console.log(this.responseData);
       localStorage.setItem('userData', JSON.stringify(this.responseData));
      //  this.navCtrl.push(TabsPage);
       }
       else{ console.log("User already exists"); }
     }, (err) => {
       // Error log
     });

  }

  getLogin(){
    
    this.authService.postData(this.user, "getMen").then((result)=>{
      this.responseData = result;
      console.log(result)
      if (this.responseData.shop) {  
       this.data = this.responseData.shop; 
       console.log(this.data);
      
      }
     else {
        console.log(this.responseData, "not conn");
     }
    }, (err) => {
      console.error(err);
    });
  }
}
