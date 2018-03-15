	import { Component } from '@angular/core';
	import { IonicPage, NavController, NavParams } from 'ionic-angular';
	import { TabsPage } from '../tabs/tabs';
	//import { ViewChild } from '@angular/core';
	//import { Slides } from 'ionic-angular';


	/**
	 * Generated class for the IntroPage page.
	 *
	 * See https://ionicframework.com/docs/components/#navigation for more info on
	 * Ionic pages and navigation.
	 */

	@IonicPage()
	@Component({
	  selector: 'page-intro',
	  templateUrl: 'intro.html',
	})
	export class IntroPage {

		 //@ViewChild(Slides) slides: Slides;

		constructor(public navCtrl: NavController, public navParams: NavParams) {

		}

		ionViewDidLoad() {
		  console.log('ionViewDidLoad IntroPage');
		}

		goToTabsPage(){
		  this.navCtrl.push(TabsPage);
		}

		// goToNextSlide(){
		// 	this.slides.slideNext();
		// }

	}
