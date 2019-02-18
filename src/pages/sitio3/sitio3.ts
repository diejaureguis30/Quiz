import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Info3Page } from '../info3/info3';
import { Favoritos2Page } from '../favoritos2/favoritos2';
import { Buscar2Page } from '../buscar2/buscar2';

/**
 * Generated class for the Sitio3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sitio3',
  templateUrl: 'sitio3.html',
})
export class Sitio3Page {
mascotas=[];
inf3=Info3Page;
fav2=Favoritos2Page;
busc2=Buscar2Page;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
  this.http.get('/v1/klfst?&category=4020&offset=1&lim=29&lang=es')
  .subscribe(data=>{
    if(data.hasOwnProperty('counter_map')){
      console.log(data.counter_map.all);
      
    }
    if(data.hasOwnProperty('list_ads')){
      this.mascotas=data.list_ads;
    }
    },
    error => {console.log(JSON.stringify(error));
    });

  }
  VerMascota(masc){
    this.navCtrl.push(this.inf3, {masc:masc});
   }
   Favoritos2(){
    this.navCtrl.push(this.fav2, {masc:this.mascotas})
  }
  Buscar2()
  {
    this.navCtrl.push(this.busc2, {masc:this.mascotas})
  }

}
