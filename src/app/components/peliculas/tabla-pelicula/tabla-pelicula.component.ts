import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/classes/pelicula';
import { DatabaseService } from 'src/app/services/database.service';
import { DatePipe } from '@angular/common';
import { DocumentReference, Timestamp } from '@angular/fire/firestore';
import { Actor } from 'src/app/classes/actor';
import { StorageService } from 'src/app/services/storage.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-tabla-pelicula',
	templateUrl: './tabla-pelicula.component.html',
	styleUrls: ['./tabla-pelicula.component.css'],
	encapsulation: ViewEncapsulation.None,
	providers: [DatePipe],
})
export class TablaPeliculaComponent {
	@Output() peliculaEvent = new EventEmitter<Pelicula>();
	peliculas: Array<Pelicula> = [];

	constructor(private dbService: DatabaseService, private stService: StorageService) { }

	async ngOnInit() {
		Swal.fire({
			imageUrl: '../../../../assets/loader.gif',
			imageWidth: 300,
			imageHeight: 300,
			imageAlt: 'loader',
			showConfirmButton: false,
			allowOutsideClick: false
		});
		const arrAux = await this.dbService.traerDatos<Pelicula>('pelis');
		arrAux.sort((p1, p2) => p1.titulo > p2.titulo ? 1 : -1);
		arrAux.forEach(async peli => {
			peli.estreno = peli.estreno instanceof Timestamp ? peli.estreno.toDate() : peli.estreno;
			peli.actor = peli.actor instanceof DocumentReference ? await this.dbService.traerObjPorRef<Actor>(peli.actor) : peli.actor;
		});
		// arrAux.sort((p1, p2) => p1.estreno > p2.estreno ? 1 : -1);
		this.peliculas = arrAux;

		Swal.close();
	}
	
	selecPelicula(pelicula: Pelicula) {
		this.peliculaEvent.emit(pelicula);
	}
}
