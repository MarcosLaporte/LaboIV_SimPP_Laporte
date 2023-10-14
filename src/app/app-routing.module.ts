import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ActorAltaComponent } from './components/actor/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor/actor-listado/actor-listado.component';
import { PeliculaAltaComponent } from './components/peliculas/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './components/peliculas/pelicula-listado/pelicula-listado.component';

const routes: Routes = [
	{ path: 'bienvenido', component: AppComponent },
	{ path: 'busqueda', component: BusquedaComponent },
	{ path: 'actor/alta', component: ActorAltaComponent },
	{ path: 'actor/listado', component: ActorListadoComponent },
	{ path: 'actor/actorPelicula', component: ActorListadoComponent },
	{ path: 'peliculas/alta', component: PeliculaAltaComponent },
	{ path: 'peliculas/listado', component: PeliculaListadoComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
