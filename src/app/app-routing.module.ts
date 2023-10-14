import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ActorAltaComponent } from './components/actor/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor/actor-listado/actor-listado.component';
import { PeliculaAltaComponent } from './components/peliculas/pelicula-alta/pelicula-alta.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
	{ path: '', redirectTo: '/busqueda', pathMatch: 'full' },
	{ path: 'busqueda', component: BusquedaComponent },
	{ path: 'actor/alta', component: ActorAltaComponent },
	{ path: 'actor/actorPelicula', component: ActorListadoComponent },
	{ path: 'peliculas/alta', component: PeliculaAltaComponent },
	{ path: '**', component: ErrorComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
