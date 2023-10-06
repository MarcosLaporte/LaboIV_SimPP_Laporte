import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { TablaPeliculaComponent } from './components/peliculas/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './components/peliculas/detalle-pelicula/detalle-pelicula.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		BusquedaComponent,
		TablaPeliculaComponent,
		DetallePeliculaComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideDatabase(() => getDatabase()),
		provideFirestore(() => getFirestore()),
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
