import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDoc } from '@angular/fire/firestore';
import { Pelicula } from 'src/app/classes/pelicula';

@Component({
	selector: 'app-tabla-pelicula',
	templateUrl: './tabla-pelicula.component.html',
	styleUrls: ['./tabla-pelicula.component.css'],
	encapsulation: ViewEncapsulation.None,
})
export class TablaPeliculaComponent {
	@Output() peliculaEvent = new EventEmitter<Pelicula>();
	peliculas: Array<Pelicula> = [];
	srcFoto: string = "../../../../favicon.ico";

	constructor(private firestore: Firestore) { }

	ngOnInit() {
		const col = collection(this.firestore, 'pelis');
		const obs = collectionData(col);
		let arrAux: Array<Pelicula> = [];

		obs.subscribe((res) => {
			res.forEach(obj => {
				const pelicula = obj as Pelicula;
				arrAux.push(pelicula);
				arrAux.sort((a, b) => a.estreno - b.estreno);
			});
		});

		this.peliculas = arrAux;
	}

	selecPelicula(pelicula: Pelicula) {
		this.peliculaEvent.emit(pelicula);
	}
}
