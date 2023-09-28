import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculasComponent } from './peliculas.component';
import { PeliculaAltaComponent } from '../../components/peliculas/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from '../../components/peliculas/pelicula-listado/pelicula-listado.component';
import { TablaPeliculaComponent } from '../../components/peliculas/tabla-pelicula/tabla-pelicula.component';


@NgModule({
  declarations: [
		PeliculasComponent,
		PeliculaAltaComponent,
		PeliculaListadoComponent,
    TablaPeliculaComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule
  ]
})
export class PeliculasModule { }
