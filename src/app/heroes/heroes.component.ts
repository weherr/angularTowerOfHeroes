import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //the starting selected hero is blank of type Hero
  selectedHero: Hero;
  // selectedHero : Hero = {
  // 	id: 99,
  // 	name: 'first hero'
  // };



  //onSelect function that takes in a Hero we shall refer to as newlySelectedHero in the function
  onSelect(newlySelectedHero : Hero): void{
  	this.selectedHero = newlySelectedHero;
  }

  // the HEROES array is created in the file ../mock-heroes, here we assign it to a variable accessable to the HeroesComponent
  heroes = HEROES;

  //creating just a starter hero of type Hero
  hero : Hero = {
  	id: 1,
  	name: 'windstorm'
  }

}
