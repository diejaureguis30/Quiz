import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Info2Page } from '../info2/info2';

/**
 * Generated class for the Buscar1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar1',
  templateUrl: 'buscar1.html',
})
export class Buscar1Page {
  productos=[];
  items1=[];
  info1P= Info2Page;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
      this.productos= this.navParams.get('prod');
  }
    ionViewDidLoad() {
      console.log('ionViewDidLoad BuscarPage');
    }
  
    getItems(ev: any){
      console.log(ev.target.value);
    
      this.items1=this.productos.filter(prod=>{ return prod.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase());});
    }

    ver1(item1){
      this.navCtrl.push(this.info1P, {prod:item1})
    }
  }


