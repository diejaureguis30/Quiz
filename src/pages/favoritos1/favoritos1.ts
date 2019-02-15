import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Favoritos1Provider } from '../../providers/favoritos1/favoritos1';

/**
 * Generated class for the Favoritos1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos1',
  templateUrl: 'favoritos1.html',
})
export class Favoritos1Page {
items1=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public fav1:Favoritos1Provider) {
    this.items1=this.fav1.getFavoritos1();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Favoritos1Page');
  }

}
