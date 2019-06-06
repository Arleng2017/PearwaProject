import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenPage } from '../men/men';
import { WomenPage } from '../women/women';
import { SkirtPage } from '../skirt/skirt';
import { PantPage } from '../pant/pant';
import { ComponentsModule } from "../../components/components.module";
import {LoginNavbarComponent} from'../../components/login-navbar/login-navbar';
import { NgModule } from "@angular/core";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})

export class HomePage {

  constructor(public navCtrl: NavController) {

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

}
