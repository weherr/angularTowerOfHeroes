import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from  './message.service';
// import { map } from 'rxjs/operators';
import { map, catchError } from 'rxjs/operators';





//adding early to try and get sports data
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
  	private messageService : MessageService, 
  	private http : HttpClient) { }

  getHeroes() : Observable<Hero[]>{
  	this.messageService.add('HeroService : Fetched Heroes');
  	return of(HEROES);
  }

  //log a new message
  log(message : string) : void{
  	this.messageService.add('HeroService : ' + message);
  }



  options: {
    observe?: 'body',
    // params?: HttpParams|{[api_key: string]: '7fba31d081adcf2551328eb1d3a1cfeb'},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  };


  test() : Observable<any> {
    // return this.http.get("https://api.the-odds-api.com/v3/sports?api_key=7fba31d081adcf2551328eb1d3a1cfeb&sport=upcoming");
    // return this.http.get("https://api.the-odds-api.com/v3/odds/?sport=baseball_mlb&region=us&mkt=spreads&apiKey=7fba31d081adcf2551328eb1d3a1cfeb&all=true");
    return this.http.get("http://www.pachostar.com/newps.aspx");
    
    // return this.http.get("https://dev.dailyroto.com/MLB/scripts/SR/odds.json");

  }


}
