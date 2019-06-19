import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { WomenPage } from '../pages/women/women';
import { MenPage } from '../pages/men/men';
import { SkirtPage } from '../pages/skirt/skirt';
import { PantPage } from '../pages/pant/pant';
import { SignupPage } from '../pages/signup/signup';
import { AdminPage } from '../pages/admin/admin';
import { AddproductPage } from '../pages/addproduct/addproduct';
import { UserinfoeditPage } from '../pages/userinfoedit/userinfoedit';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Home', component: HomePage },
      // { title: 'List', component: ListPage },
      { title: 'เสื้อสูทสำหรับบุรุษ', component: MenPage },
      { title: 'เสื้อสูทสำหรับสตรี', component: WomenPage },
      { title: 'กางเกงสำหรับบุรุษ', component: PantPage },
      { title: 'กระโปรงสำหรับสตรี', component: SkirtPage },
      { title: 'สมัครสมาชิก', component: SignupPage },
      { title: 'แก้ไขข้อมูลส่วนตัว', component: UserinfoeditPage },
      { title: 'admin', component: AdminPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
