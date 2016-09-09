import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { Page1 } from './pages/page1/page1';
import { Page2 } from './pages/page2/page2';

import {Http, HTTP_PROVIDERS, RequestOptions, Headers} from '@angular/http';
import {provide} from '@angular/core';
import {TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';

@Component({
  templateUrl: 'build/app.html',
  pipes: [TranslatePipe]
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, private  translate: TranslateService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Page uno', component: Page1 },
      { title: 'Page dos', component: Page2 }
    ];

    //initialize ng2-translate
    this.initTranslation();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  initTranslation() {
    var userLang = navigator.language.split('-')[0]; // use navigator lang if available
    userLang = /(de|en|es)/gi.test(userLang) ? userLang : 'en';

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use(userLang);
  }
}

ionicBootstrap(MyApp, [[provide(TranslateLoader, {
    useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
    deps: [Http]
  }),
  TranslateService]], {
});

