import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Info3Page } from '../info3/info3';

/**
 * Generated class for the Buscar2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar2',
  templateUrl: 'buscar2.html',
})
export class Buscar2Page {
  mascotas=[];
  items2=[];
  info2P= Info3Page;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
      this.mascotas= this.navParams.get('masc');
  }
    ionViewDidLoad() {
      console.log('ionViewDidLoad BuscarPage');
    }
  
    getItems(ev: any){
      console.log(ev.target.value);
    
      this.items2=this.mascotas.filter(masc=>{ return masc.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase())})
    }
    ver2(item2){
      this.navCtrl.push(this.info2P, {masc:item2})
   }
  }

