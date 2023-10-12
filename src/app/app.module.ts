import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { provideStorage, getStorage } from '@angular/fire/storage';

import { ActorAltaComponent } from './components/actor/actor-alta/actor-alta.component';
import { TablaPaisesComponent } from 'src/app/components/tabla-paises/tabla-paises.component';
import { ActorPeliculaComponent } from 'src/app/components/actor/actor-pelicula/actor-pelicula.component';
import { ActorListadoComponent } from 'src/app/components/actor/actor-listado/actor-listado.component';
import { TablaPeliculaComponent } from 'src/app/components/peliculas/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from 'src/app/components/peliculas/detalle-pelicula/detalle-pelicula.component';
import { PeliculaAltaComponent } from './components/peliculas/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './components/peliculas/pelicula-listado/pelicula-listado.component';
import { FormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		AppComponent,
		BusquedaComponent,
		TablaPaisesComponent,
		ActorAltaComponent,
  	ActorPeliculaComponent,
		ActorListadoComponent,
		PeliculaAltaComponent,
		PeliculaListadoComponent,
		TablaPeliculaComponent,
		DetallePeliculaComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideDatabase(() => getDatabase()),
		provideFirestore(() => getFirestore()),
		HttpClientModule,
		provideStorage(() => getStorage()),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
