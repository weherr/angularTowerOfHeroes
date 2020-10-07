import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service'
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService : HeroService, private messageService : MessageService) { }

  ngOnInit(): void {
  	//call the getHeroes function
  	this.getHeroes();

  	this.test();
  }

  //the starting selected hero is blank of type Hero
  selectedHero: Hero;
  // selectedHero : Hero = {
  // 	id: 99,
  // 	name: 'first hero'
  // };



  //onSelect function that takes in a Hero we shall refer to as newlySelectedHero in the function
  onSelect(newlySelectedHero : Hero): void{
  	this.messageService.add(newlySelectedHero.name + ' was selected');
  	this.selectedHero = newlySelectedHero;
  }

  // the HEROES array is created in the file ../mock-heroes. Here we put it is a null to start
  // in the getHeroes() function we have the service go get it
  heroes = null;

  //creating just a starter hero of type Hero
  hero : Hero = {
  	id: 1,
  	name: 'windstorm'
  }

  getHeroes() : void{
  	this.heroService.getHeroes().subscribe(heroes => {this.heroes = heroes});
  }


  test() : void{
  	this.heroService.test().subscribe(res => {
         console.log(res);
    });
  }


}
