//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.

  8d73ab11ea547a2eb1b6cede450a3d27

  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDczYWIxMWVhNTQ3YTJlYjFiNmNlZGU0NTBhM2QyNyIsInN1YiI6IjVhYWFjMGYyYzNhMzY4NmMwNTAwMjViOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T_OYlWyh_FNiN7Wb4j6kGw-fDdcVhY65adEPJVKyx30



*/
@Injectable()
export class MovieProvider {

  private baseApiUrl = "https://api.themoviedb.org/3"

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getApiKey():string{
	  return "8d73ab11ea547a2eb1b6cede450a3d27";
  }

  getLastMovies(){
	  return this.http.get(this.baseApiUrl + "/movie/popular?api_key="+ this.getApiKey());
  }

}
