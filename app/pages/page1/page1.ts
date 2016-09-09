import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TranslatePipe} from 'ng2-translate/ng2-translate';

@Component({
  templateUrl: 'build/pages/page1/page1.html',
  pipes: [TranslatePipe]
})
export class Page1 {

  constructor(public navCtrl: NavController) {
  }
}
