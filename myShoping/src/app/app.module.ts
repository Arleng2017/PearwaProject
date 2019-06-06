import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
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
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { SignupPage } from '../pages/signup/signup';
import { AdminPage } from '../pages/admin/admin';
import { BasketPage } from '../pages/basket/basket';
// import { LoginNavbarComponent } from '../components/login-navbar/login-navbar';
// import { AuthService } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MenPage,
    WomenPage,
    SkirtPage,
    PantPage,
    SignupPage,
    AdminPage,
    BasketPage,
    // LoginNavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    PantPage,
    SignupPage,
    AdminPage,
    BasketPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CallApiProvider,
    AuthServiceProvider
  ]
})
export class AppModule {}
