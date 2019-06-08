import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ProductmanagerPage } from '../productmanager/productmanager';

/**
 * Generated class for the EditproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editproduct',
  templateUrl: 'editproduct.html',
})
export class EditproductPage {
  responseData: any;
  data: any;
  type: string;
  id: string;
  name: string;
  price: number;
  picture: string;
  update: string;
  get: string;
  product = {
    id: null,
    name: null,
    price: null,
    picture: null
  }
  constructor(public alertCtrl: AlertController, public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get('id');
    this.type = this.navParams.get('type');
    this.getProduct();

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EditproductPage');
  }
  getProduct() {
    console.log(this.id);
    if (this.type == "women") { this.get = "getWomenById"; this.update = "updateWomen"; }
    else if (this.type == "men") { this.get = "getMenById"; this.update = "updateMen"; }
    else if (this.type == "pant") { this.get = "getPantById"; this.update = "updatePant"; }
    else if (this.type == "skirt") { this.get = "getSkirtById"; this.update = "updateSkirt"; }
    this.authService.postData(this.id, this.get).then((result) => {
      this.responseData = result;
      this.data = this.responseData.data;
      this.set();
      console.log(this.data);
    }, (err) => {
      console.error(err);
    });
  }
  set() {
    this.name = this.data[0].name;
    this.price = this.data[0].price;
    this.picture = this.data[0].picture;
  }

  updateProduct() {
    const alert = this.alertCtrl.create({
      title: 'ต้องการบันทึกการแก้ไขหรือไม่',
      buttons: [
        {
          text: 'ยกเลิก'
        }, {
          text: 'ตกลง',
          handler: data => {
            this.product.id = this.id;
            this.product.name = this.name;
            this.product.price = this.price;
            this.product.picture = this.picture;
            this.authService.postData(this.product, this.update).then((result) => {
              this.responseData = result;
              console.log(result)
              this.navCtrl.setRoot(ProductmanagerPage);
              if (this.responseData.pattient) {
                console.log(this.responseData, "sss");
              }
              else {
                console.log(this.responseData, "not conn");
              }
            });
            
          }
        }
      ]
    });
    alert.present();

  }
}
