import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductmanagerPage } from './productmanager';

@NgModule({
  declarations: [
    ProductmanagerPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductmanagerPage),
  ],
})
export class ProductmanagerPageModule {}
