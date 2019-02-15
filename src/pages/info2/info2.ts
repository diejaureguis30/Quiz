import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Favoritos1Provider } from '../../providers/favoritos1/favoritos1';

/**
 * Generated class for the Info2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info2',
  templateUrl: 'info2.html',
})
export class Info2Page {
prod={};
imgs2=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public fav1: Favoritos1Provider) {
    this.prod=this.navParams.get('prod');
    if(this.prod.ad.hasOwnProperty('images'))
    {
      this.imgs2=this.prod.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Info2Page');
  }

  addfavoritos(prod)
  {
    this.fav1.addFavoritos1(prod); 
  }

}
