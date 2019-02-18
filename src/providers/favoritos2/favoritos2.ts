import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the Favoritos2Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Favoritos2Provider {
  favoritos2=[];

  constructor(public toastCtrl:ToastController) {
    console.log('Hello Favoritos1Provider Provider');
  }
  addFavoritos2(masc){
    this.favoritos2.push(masc)
    {
      const toast = this.toastCtrl.create({
        message: 'Anuncio agregado',
        duration: 3000,
        position:'top'});
        toast.present();
    }
  
  }
  getFavoritos2(){
    return this.favoritos2;
  }

}


