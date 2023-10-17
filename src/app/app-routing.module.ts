import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ActorAltaComponent } from './components/actor/actor-alta/actor-alta.component';
import { PeliculaAltaComponent } from './components/peliculas/pelicula-alta/pelicula-alta.component';
import { ErrorComponent } from './components/error/error.component';
import { ActorPeliculaComponent } from './components/actor/actor-pelicula/actor-pelicula.component';

const routes: Routes = [
	{ path: '', redirectTo: '/busqueda', pathMatch: 'full' },
	{ path: 'busqueda', component: BusquedaComponent },
	{ path: 'actor/alta', component: ActorAltaComponent },
	{ path: 'actor/actorPelicula', component: ActorPeliculaComponent },
	{ path: 'peliculas/alta', component: PeliculaAltaComponent },
	{ path: '**', component: ErrorComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
