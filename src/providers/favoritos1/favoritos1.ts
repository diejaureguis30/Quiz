import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the Favoritos1Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Favoritos1Provider {
  favoritos1=[];

  constructor(public toastCtrl:ToastController) {
    console.log('Hello Favoritos1Provider Provider');
  }
  addFavoritos1(prod){
    this.favoritos1.push(prod)
    {
      const toast = this.toastCtrl.create({
        message: 'Anuncio agregado',
        duration: 3000,
        position:'top'});
        toast.present();
    }
  
  }
  getFavoritos1(){
    return this.favoritos1;
  }

}
