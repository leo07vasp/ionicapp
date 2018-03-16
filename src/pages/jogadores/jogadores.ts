import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the JogadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-jogadores',
  templateUrl: 'jogadores.html'
})
export class JogadoresPage {



  	public objeto_feed = {
	  	titulo : "Léo",
		data : "5 Outubro , 2018",
		descricao : "Angular 5, JWT, Spring Boot,REST,Security,Data e MongoDB (Projeto Prático)",
		qty_like: 110,
		qty_comments: 90,
		time_comment : "20h ago"
	}





  public nome_player:string = "Eden Hazard";

  constructor(
	  public navCtrl: NavController,
	  public navParams: NavParams)
	   {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JogadoresPage');
	}

}
