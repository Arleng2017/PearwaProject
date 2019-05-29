import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CallApiProvider } from '../providers/call-api/call-api';
import { MenPage } from '../pages/men/men';
import { WomenPage } from '../pages/women/women';
import { SkirtPage } from '../pages/skirt/skirt';
import { PantPage } from '../pages/pant/pant';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MenPage,
    WomenPage,
    SkirtPage,
    PantPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MenPage,
    WomenPage,
    SkirtPage,
    PantPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CallApiProvider
  ]
})
export class AppModule {}
