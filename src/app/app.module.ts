import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { HeroServices } from './services/heros.services';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shered/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HerosComponent } from './components/heros/heros.component';
import { HeroComponent } from './components/hero/hero.component';
import { BuscarHeroComponent } from './components/buscar-hero/buscar-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HerosComponent,
    HeroComponent,
    BuscarHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [
    HeroServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
