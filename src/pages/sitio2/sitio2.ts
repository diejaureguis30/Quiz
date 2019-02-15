import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Info2Page } from '../info2/info2';
import { Favoritos1Page } from '../favoritos1/favoritos1';
import { Buscar1Page } from '../buscar1/buscar1';

/**
 * Generated class for the Sitio2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sitio2',
  templateUrl: 'sitio2.html',
})
export class Sitio2Page {
  productos=[];
  inf2=Info2Page;
  fav1=Favoritos1Page;
  busc1=Buscar1Page;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get('/v1/klfst?&category=5020&offset=1&lim=29&lang=es')
    .subscribe(data=>
      {console.log(JSON.stringify(data));
      if(data.hasOwnProperty('counter_map')){
        console.log(data.counter_map.all);
        
      }
      if(data.hasOwnProperty('list_ads')){
        this.productos=data.list_ads;
      }
      },
      error => {console.log(JSON.stringify(error));
      
      });
  }
  VerProducto(prod){
    this.navCtrl.push(this.inf2, {prod:prod})
  }
  Favoritos1(){
    this.navCtrl.push(this.fav1, {prod:this.productos})
  }
  Buscar1()
  {
    this.navCtrl.push(this.busc1, {prod:this.productos})
  }

  }
  


