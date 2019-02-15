import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../info/info';
import { FavoritosPage } from '../favoritos/favoritos';
import { BuscarPage } from '../buscar/buscar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
consolas=[];
inf=InfoPage;
fav=FavoritosPage;
busc=BuscarPage;
  constructor(public navCtrl: NavController, public http:HttpClient) {
    this.http.get('/v1/klfst?&category=5060&offset=1&lim=29&lang=es')
    .subscribe(data=>
      {
        //console.log(JSON.stringify(data));
      if(data.hasOwnProperty('counter_map')){
        console.log(data.counter_map.all);
        
      }
      if(data.hasOwnProperty('list_ads')){
        this.consolas=data.list_ads;
      }
      },
      error => {console.log(JSON.stringify(error));
      
      });
  }
VerConsola(cons){
     this.navCtrl.push(this.inf, {cons:cons});
    }
Favoritos(){
  this.navCtrl.push(this.fav, {cons:this.consolas})
}
Buscar()
{
  this.navCtrl.push(this.busc, {cons:this.consolas})
}
  }
