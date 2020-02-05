import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroServices, Hero } from '../../services/heros.services';
import { HerosComponent } from '../heros/heros.component';


@Component({
  selector: 'app-buscar-hero',
  templateUrl: './buscar-hero.component.html',
  styleUrls: ['./buscar-hero.component.css']
})
export class BuscarHeroComponent implements OnInit {

  heros: Hero[] = [];
  termino: string;
  mensaje: string;
  constructor( private activatedRoute: ActivatedRoute,
               private heroServices: HeroServices,
               private router: Router  ) {
               }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heros = this.heroServices.buscarHeros( params['termino'] ) ;
      console.log( this.heros );
      if (this.heros.length <= 0) {
        this.mensaje = 'No se encontro resultado';
      } else {
        this.mensaje = '';
      }

    });

  }
  verHero(idx: number) {
    console.log(idx);
    // this.router.navigate(['/hero', idx]);
  }
}
