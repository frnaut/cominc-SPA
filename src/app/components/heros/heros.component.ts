import { Component, OnInit } from '@angular/core';
import { HeroServices, Hero } from '../../services/heros.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heros: Hero[] = [];

  constructor( private heroService: HeroServices,
               private router: Router
    ) {
    console.log('constructor') ;

   }

  ngOnInit() {
    this.heros = this.heroService.getHeros();
    console.log(this.heros) ;
  }

  verHero(idx: number) {
    this.router.navigate(['/hero', idx]);
  }

}
