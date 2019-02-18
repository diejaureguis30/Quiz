import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Favoritos2Provider } from '../../providers/favoritos2/favoritos2';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the Info3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info3',
  templateUrl: 'info3.html',
})
export class Info3Page {
masc={};
imgs3=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public fav2:FavoritosProvider) {
  this.masc=this.navParams.get('masc');
  if(this.masc.ad.hasOwnProperty('images'))
  {
    this.imgs3=this.masc.ad.images;
  }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Info3Page');
  }
  Addfavoritos(masc)
  {
    //this.fav2.addFavoritos2(masc);
    this.fav2.addFavoritos(masc); 
  }
}
