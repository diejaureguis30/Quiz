import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {
  consolas=[];
  items=[];
  infoP= InfoPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
      this.consolas= this.navParams.get('cons');
  }
    ionViewDidLoad() {
      console.log('ionViewDidLoad BuscarPage');
    }
  
    getItems(ev: any){
      console.log(ev.target.value);
    
      this.items=this.consolas.filter(cons=>{ return cons.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase())})
    }
  
    ver(item){
      this.navCtrl.push(this.infoP, {cons:item})
    }
}
