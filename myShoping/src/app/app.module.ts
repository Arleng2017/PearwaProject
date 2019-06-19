import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, AlertController } from 'ionic-angular';
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
import { ProductmanagerPage } from '../pages/productmanager/productmanager';
import { UsermanagerPage } from '../pages/usermanager/usermanager';
import { OrdermanagerPage } from '../pages/ordermanager/ordermanager';
import { AddproductPage } from '../pages/addproduct/addproduct';
import { EditproductPage } from '../pages/editproduct/editproduct';
import { LoginPage } from '../pages/login/login';
import { EdituserPage } from '../pages/edituser/edituser';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { LoginNavbarComponent } from '../components/login-navbar/login-navbar';
import { MenPageModule } from '../pages/men/men.module';
import { OrderPage } from '../pages/order/order';
import { MyorderPage } from '../pages/myorder/myorder';
import { UserinfoeditPage } from '../pages/userinfoedit/userinfoedit';
import { UserinfoPage } from '../pages/userinfo/userinfo';
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
    ProductmanagerPage,
    UsermanagerPage,
    OrdermanagerPage,
    AddproductPage,
    EditproductPage,
    LoginPage,
    EdituserPage,
    LoginNavbarComponent,
    OrderPage,
    MyorderPage,
    UserinfoeditPage,
    UserinfoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // LoginNavbarComponent,
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
    BasketPage,
    ProductmanagerPage,
    UsermanagerPage,
    OrdermanagerPage,
    AddproductPage,
    EditproductPage,
    LoginPage,
    EdituserPage, 
    LoginNavbarComponent,
    OrderPage,
    MyorderPage,
    UserinfoeditPage,
    UserinfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AlertController,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CallApiProvider,
    AuthServiceProvider,
    LoginServiceProvider
    


  ]
})
export class AppModule { }
