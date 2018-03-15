import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { FavoritosPageModule } from '../pages/favoritos/favoritos.module';
import { DetalhesPageModule } from '../pages/detalhes/detalhes.module';
import { JogadoresPageModule } from "../pages/jogadores/jogadores.module";
import { IntroPageModule } from "../pages/intro/intro.module";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
	TabsPage
  ],
  imports: [
	JogadoresPageModule,
	DetalhesPageModule,
    FavoritosPageModule,
	IntroPageModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
