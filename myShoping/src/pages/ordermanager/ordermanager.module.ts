import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrdermanagerPage } from './ordermanager';

@NgModule({
  declarations: [
    OrdermanagerPage,
  ],
  imports: [
    IonicPageModule.forChild(OrdermanagerPage),
  ],
})
export class OrdermanagerPageModule {}
