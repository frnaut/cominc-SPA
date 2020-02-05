import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroServices, Hero } from '../../services/heros.services';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent {

  hero: any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private heroServices: HeroServices
    ) {

    this.activatedRoute.params.subscribe( params => {
      this.hero = this.heroServices.getHero( params['id'] );

    } );

  }


}
