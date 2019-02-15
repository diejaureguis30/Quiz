import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpClientModule} from '@angular/common/http'
import { InfoPage } from '../pages/info/info';
import { Sitio2Page } from '../pages/sitio2/sitio2';
import { TabsPage } from '../pages/tabs/tabs';
import { Sitio3Page } from '../pages/sitio3/sitio3';
import { Info2Page } from '../pages/info2/info2';
import { Info3Page } from '../pages/info3/info3';
import { FavoritosProvider } from '../providers/favoritos/favoritos';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { BuscarPage } from '../pages/buscar/buscar';
import { Buscar1Page } from '../pages/buscar1/buscar1';
import { Buscar2Page } from '../pages/buscar2/buscar2';
import { Favoritos1Page } from '../pages/favoritos1/favoritos1';
import { Favoritos2Page } from '../pages/favoritos2/favoritos2';
import { Favoritos1Provider } from '../providers/favoritos1/favoritos1';
import { Favoritos2Provider } from '../providers/favoritos2/favoritos2';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfoPage,
    Sitio2Page,
    TabsPage,
    Sitio3Page,
    Info2Page,
    Info3Page,
    FavoritosPage,
    BuscarPage,
    Buscar1Page,
    Buscar2Page,
    Favoritos1Page,
    Favoritos2Page

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InfoPage,
    Sitio2Page,
    TabsPage,
    Sitio3Page,
    Info2Page,
    Info3Page,
    FavoritosPage,
    BuscarPage,
    Buscar1Page,
    Buscar2Page,
    Favoritos1Page,
    Favoritos2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritosProvider,
    Favoritos1Provider,
    Favoritos2Provider
  ]
})
export class AppModule {}
