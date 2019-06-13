import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { HomePage } from '../home/home';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  get: string;
  id: string;
  inches: number;
  size: string;
  responseData: any;
  data: any;
  type: string;
  order = {
    id_user: null,
    product_name: null,
    order_name: null,
    status_order: null,
    payment: null,
    paid: null,
    price: null,
    size: null,
    product_type: null,
    date_order: null,
    time_order: null,
    date_sender: null,
    time_sender: null
  }
  constructor(public aletCtrl: AlertController, public loginService: LoginServiceProvider, public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.get = this.navParams.get('get');
    this.id = this.navParams.get('id');
    console.log(this.get);
    console.log(this.id);
    this.authService.postData(this.id, this.get).then((result) => {
      this.responseData = result;
      this.data = this.responseData.data;

      console.log(this.data);
    }, (err) => {
      console.error(err);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  back() {
    this.navCtrl.pop();
  }

  calSize() {
    if (this.inches != null) {

      if (this.get == "getWomenById" || this.get == "getMenById") {
        if (this.inches >= 32 && this.inches < 36) {
          this.size = "S";
        } else if (this.inches >= 36 && this.inches < 40) {
          this.size = "M";
        } else if (this.inches >= 40 && this.inches < 42) {
          this.size = "L";
        } else if (this.inches >= 42 && this.inches < 44) {
          this.size = "XL";
        } else if (this.inches >= 44 && this.inches < 46) {
          this.size = "XXL";
        } else if (this.inches >= 46) {
          this.size = "XXXL";
        }
        this.order.size = this.size;
        // this.addToBasket();
      }
      if (this.get == "getPantById" || this.get == "getSkirtById") {
        console.log(this.inches);
        this.size = this.inches.toString();
        // this.addToBasket();
      }
      this.addToBasket();
    } else {
      const alert = this.aletCtrl.create({
        title: 'กรุณากรอกข้อมูลให้ครบ',
        buttons: ['ตกลง']
      });
      alert.present();
    }

    this.order.size = this.size;
  
  }

  addToBasket() {
    this.order.product_name = this.data[0].name;
    this.order.size = this.size;
    this.order.price = this.data[0].price;
    this.order.id_user = this.loginService.user.id;
    this.order.status_order = "basket";
    this.order.order_name = "คุณ " + this.loginService.user.name + " " + this.loginService.user.lastname;
    if (this.get == "getWomenById") { this.order.product_type = "women" }
    else if (this.get == "getMenById") { this.order.product_type = "men" }
    else if (this.get == "getPantById") { this.order.product_type = "pant" }
    else if (this.get == "getSkirtById") { this.order.product_type = "skirt" }

    console.log(this.order);
    this.authService.postData(this.order, 'addToBasket').then((result) => {
      this.responseData = result;
      const alert = this.aletCtrl.create({
        title: 'เพิ่มสินค้าในตะกร้าสำเร็จ',
        buttons: [
          {
            text: 'ตกลง',
            handler: data => {
              this.navCtrl.pop();
            }
          }
        ],

      });
      alert.present();


    }, (err) => {

    });

  }

}
