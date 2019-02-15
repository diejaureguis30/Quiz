import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
cons={};
imgs=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavoritosProvider) {
  this.cons=this.navParams.get('cons');
  if(this.cons.ad.hasOwnProperty('images')){
    this.imgs=this.cons.ad.images; 
   }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }
  favoritos(cons)
  {
    this.fav.addFavoritos(cons); 
  }

}
