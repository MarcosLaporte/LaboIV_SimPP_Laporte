import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

const routes: Routes = [
	{ path: 'bienvenido', component: AppComponent },
	{ path: 'busqueda', component: BusquedaComponent },
	{ path: 'peliculas', loadChildren: () => import('./modules/peliculas/peliculas.module').then(m => m.PeliculasModule) },
	{ path: 'actor', loadChildren: () => import('./modules/actor/actor.module').then(m => m.ActorModule) }, 
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
