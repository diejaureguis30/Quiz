import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Favoritos2Provider } from '../../providers/favoritos2/favoritos2';

/**
 * Generated class for the Favoritos2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos2',
  templateUrl: 'favoritos2.html',
})
export class Favoritos2Page {
  items2=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public fav2:Favoritos2Provider) {
    this.items2=this.fav2.getFavoritos2();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Favoritos2Page');
  }

}
