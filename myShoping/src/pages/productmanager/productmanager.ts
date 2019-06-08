import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UsermanagerPage } from '../usermanager/usermanager';
import { OrdermanagerPage } from '../ordermanager/ordermanager';
import { HomePage } from '../home/home';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AddproductPage } from '../addproduct/addproduct';
import { EditproductPage } from '../editproduct/editproduct';

/**
 * Generated class for the ProductmanagerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productmanager',
  templateUrl: 'productmanager.html',
})
export class ProductmanagerPage {
  edit: any = 'men';
  add: string;
  get: string;
  type:string;
  product = {
    id: null
  }
  delete: string;
  responseData: any;
  data: any;
  
  constructor(public alertCtrl: AlertController, public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.chooseEdit();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductmanagerPage');
  }
  goProductManagerPage() {
    this.navCtrl.setRoot(ProductmanagerPage);
  }
  goUserManagerPage() {
    this.navCtrl.setRoot(UsermanagerPage);
  }
  goOrderManagerPage() {
    this.navCtrl.setRoot(OrdermanagerPage);
  }
  logout() {
    this.navCtrl.setRoot(HomePage);
  }
  chooseEdit() {
    console.log(this.edit)
    if (this.edit == 'women') {
      this.add = "addWomen";
      this.delete = "deleteWomen";
      this.get = "getWomens";
      this.type="women";
      this.authService.postData(null, this.get).then((result) => {
        this.responseData = result;
        this.data = this.responseData.data;
        console.log(this.data);
      }, (err) => {
        console.error(err);
      });
    } else if (this.edit == 'men') {
      this.delete = "deleteMen";
      this.add = "addMen";
      this.get = "getMens";
      this.type="men";
      this.authService.postData(null, this.get).then((result) => {
        this.responseData = result;
        this.data = this.responseData.data;
        console.log(this.data);
      }, (err) => {
        console.error(err);
      });
    } else if (this.edit == 'pant') {
      this.delete = "deletePant";
      this.add = "addPant";
      this.get = "getPants"
      this.type="pant"
      this.authService.postData(null, this.get).then((result) => {
        this.responseData = result;
        this.data = this.responseData.data;
        console.log(this.data);
      }, (err) => {
        console.error(err);
      });
    } else if (this.edit == 'skirt') {
      this.delete = "deleteSkirt";
      this.add = "addSkirt";
      this.get = "getSkirts";
      this.type="skirt";
      this.authService.postData(null, this.get).then((result) => {
        this.responseData = result;
        this.data = this.responseData.data;
        console.log(this.data);
      }, (err) => {
        console.error(err);
      });
    }
  
  }

  addNewProduct() {
    this.navCtrl.push(AddproductPage, { add: this.add });
    console.log("OK");
  }

  delProduct(id: string) {
    this.product.id = id;
    const alert = this.alertCtrl.create({
      title: 'ต้องการลบสินค้าหรือไม่',
      buttons: [
        {
          text: 'ยกเลิก'
        }, {
          text: 'ตกลง',
          handler: data => {
            console.log(this.product.id);
            this.authService.postData(this.product, this.delete).then((result) => {

              this.chooseEdit();
            }, (err) => {
              console.error(err);
            });
          }
        }
      ]
    });
    alert.present();
    console.log(id);
  }

  editProduct(id: string) {
    this.navCtrl.push(EditproductPage, { id: id,type:this.type });
  }
}
