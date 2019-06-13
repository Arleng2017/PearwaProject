import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PantPage } from '../pant/pant';
import { SkirtPage } from '../skirt/skirt';
import { WomenPage } from '../women/women';
import { MenPage } from '../men/men';
import { HomePage } from '../home/home';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginServiceProvider } from '../../providers/login-service/login-service';

/**
 * Generated class for the BasketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-basket',
  templateUrl: 'basket.html',
})
export class BasketPage {
  responseData: any;
  data: any;
  orderStatus: string = "basket";
  priceTotal:number=0;
  product = {
    // id: null,
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
  constructor(public alertCtrl: AlertController, public loginService: LoginServiceProvider, public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.getOrderList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasketPage');
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

  getOrderList() {
    this.priceTotal=0;
    console.log(this.loginService.user.id);
    this.authService.postData(this.loginService.user.id, "getBasket").then((result) => {
      this.responseData = result;
      this.data = this.responseData.data;
      for (let index = 0; index < this.data.length; index++) {
        this.priceTotal=Number(this.priceTotal)+Number(this.data[index].price);
        
      }
      console.log(this.data);
    }, (err) => {
      console.error(err);
    });
  }

  deleteProduct(id: string) {
    console.log(id);
    const alert = this.alertCtrl.create(
      {
        title: 'ต้องการลบสินค้าออกจาตะกร้าหรือไม่',
        buttons: [
          {
            text: 'ยกเลิก'
          }, {
            text: 'ตกลง',
            handler: data => {
              this.authService.postData(id, "deleteProduct").then((result) => {
                this.getOrderList();
              }, (err) => {
                console.error(err);
              });
            }
          }
        ]

      }
    );
    alert.present();
    // console.log(this.product.id);

  }

  inOrder() {



    // console.log("product id : " + this.data[i].id);
    const alert1 = this.alertCtrl.create({
      title: 'ต้องการสั่งซื้อสินค้าหรือไม่',
      buttons: [
        {
          text: 'ยกเลิก'
        },
        {
          text: 'ตกลง',
          handler: data => {
            var date = new Date();
            for (let i = 0; i < this.data.length; i++) {
              // this.product.id = this.data[i].id;
              this.product.id_user = this.data[i].id_user;
              this.product.product_name = this.data[i].product_name;
              this.product.order_name = this.data[i].order_name;
              this.product.status_order = "inorder";
              this.product.payment = this.data[i].payment;
              this.product.paid = this.data[i].paid;
              this.product.price = this.data[i].price;
              this.product.size = this.data[i].size;
              this.product.product_type = this.data[i].product_type;
              this.product.date_order = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
              this.product.time_order = date.getHours() + ":" + date.getMinutes();
              this.product.date_sender = this.data[i].date_sender;
              this.product.time_sender = this.data[i].date_sender;
              console.log(this.product);
              this.authService.postData(this.product, "addToOrderList").then((result) => {
                this.responseData = result;
                console.log(result)
                this.authService.postData(this.data[i].id, "deleteFromBasket").then((result) => {
                  this.getOrderList();
                }, (err) => {
                  console.error(err);
                });
                // this.navCtrl.setRoot(ProductmanagerPage);
                if (this.responseData.pattient) {
                  console.log(this.responseData, "sss");
                }
                else {
                  console.log(this.responseData, "not conn");
                }
              });


            }
            const alert2 = this.alertCtrl.create({
              title: 'สินค้าของคุณถูกสั่งซื้อแล้ว',
              buttons: ['ตกลง']
            });
            alert2.present();


          }
        }
      ]
    });
    alert1.present();


  }

}
