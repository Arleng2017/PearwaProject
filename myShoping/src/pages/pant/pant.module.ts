import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PantPage } from './pant';

@NgModule({
  declarations: [
    PantPage,
  ],
  imports: [
    IonicPageModule.forChild(PantPage),
  ],
})
export class PantPageModule {}
