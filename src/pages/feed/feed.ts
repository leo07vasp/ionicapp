import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from "../../providers/movie/movie";

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
      MovieProvider
  ]
})
export class FeedPage {

	constructor(
   	 	public navCtrl: NavController,
		private movieProvider: MovieProvider,
   	 	public navParams: NavParams) {
    }

	 public lista_filmes = new Array<any>();

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');

	this.movieProvider.getLastMovies().subscribe(
		data=>{
			const response = (data as any);
			const objeto_retorno = JSON.parse(response._body);
			this.lista_filmes = objeto_retorno.results;
			//console.log(objeto_retorno);
		},
		error =>{
			console.log(error);
		}
	);

  }

}
