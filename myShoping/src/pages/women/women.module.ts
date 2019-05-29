import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WomenPage } from './women';

@NgModule({
  declarations: [
    WomenPage,
  ],
  imports: [
    IonicPageModule.forChild(WomenPage),
  ],
})
export class WomenPageModule {}
