import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ProductmanagerPage } from '../productmanager/productmanager';

/**
 * Generated class for the AddproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addproduct',
  templateUrl: 'addproduct.html',
})

export class AddproductPage {
  name:string;
  price:number;
  picture:string;
  responseData: any;
  data:any;
  add:string;
  edit:string;
  product={
    name:null,
    price:null,
    picture:null
  }
  constructor(public authService:AuthServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.add=this.navParams.get('add');
    if(this.add=="addWomen"){  this.edit="women"}
    else if(this.add=="addMen"){this.edit="men"}
    else if(this.add=="addPant"){this.edit="pant"}
    else if(this.add=="addSkirt"){this.edit="skirt"}
    console.log(this.add);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddproductPage');
  }

  addProduct(){
    this.product.name=this.name;
    this.product.price=this.price;
    this.product.picture=this.picture;
    this.authService.postData(this.product,this.add).then((result) => {
      this.responseData = result;
      console.log(this.responseData)
      this.navCtrl.setRoot(ProductmanagerPage);
      // this.navCtrl.pop();
      // this.navCtrl.setRoot(ProductmanagerPage,{edit:this.edit});
      // this.getSymptoms();
      // this.getDateReset()
    });

  }
}
