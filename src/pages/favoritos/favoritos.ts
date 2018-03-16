import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from "../../providers/movie/movie";

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
  providers: [
      MovieProvider
  ]
})
export class FavoritosPage {

  constructor(
	  public navCtrl: NavController,
	  public navParams: NavParams,
  	   private movieProvider: MovieProvider) {
  }

	public somaDoisNumeros(num1:number, num2:number):void{
		alert(num1+num2);
	}


	 public lista_filmes = new Array<any>();

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
	//this.somaDoisNumeros(10,99);

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
