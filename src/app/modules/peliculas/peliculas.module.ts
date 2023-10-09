import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculasComponent } from './peliculas.component';
import { PeliculaAltaComponent } from '../../components/peliculas/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from '../../components/peliculas/pelicula-listado/pelicula-listado.component';
import { FormsModule } from '@angular/forms';
import { ActorListadoComponent } from 'src/app/components/actor/actor-listado/actor-listado.component';


@NgModule({
  declarations: [
		PeliculasComponent,
		PeliculaAltaComponent,
		PeliculaListadoComponent,
		ActorListadoComponent,
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
		FormsModule
  ]
})
export class PeliculasModule { }
