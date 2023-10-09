import { Component } from '@angular/core';
import { Actor } from 'src/app/classes/actor';
import { Pelicula, generos } from 'src/app/classes/pelicula';
import { DatabaseService } from 'src/app/services/database.service';
import { StorageService } from 'src/app/services/storage.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-pelicula-alta',
	templateUrl: './pelicula-alta.component.html',
	styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent {
	readonly genres = generos;
	title: string = "";
	genre: string = "";
	year: number = 2023;
	audience: number = 0;
	cast: Array<Actor> = [];
	fotoSrc: string = "";
	imgFile: File | undefined;

	constructor(private dbService: DatabaseService, private stService: StorageService) { }

	dicToObjArray(dictionary: { [key: string]: string }): { key: string; value: string }[] {
		return Object.entries(dictionary).map(([key, value]) => ({ key, value }));
	}

	guardarPeli() {
		if (this.title == "" || this.genre == "" || this.year == null ||
			this.audience == null || !(this.imgFile instanceof File)) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Revise los datos ingresados.',
			});
			return;
		}

		const idPeli = this.dbService.agregarPelicula(this.title, generos[this.genre], this.year, this.audience, this.cast, this.fotoSrc);
		if ( idPeli !== null && this.stService.subirImagen(this.imgFile, `peliculas/${idPeli}`)) {
			Swal.fire({
				icon: 'success',
				title: 'Hecho!',
				text: 'La película fue agregada con éxito!',
			});
			this.borrarValores();
		} else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Hubo un problema al agregar la película.',
			});
		}
	}

	borrarValores() {
		this.title = "";
		this.genre = "";
		this.year = 2023;
		this.audience = 0;
		this.cast = [];
		this.imgFile = undefined;
	}

	actorSelec(actor: any) {
		const auxActor = actor as Actor;
		if (auxActor !== null && !this.cast.includes(auxActor))
			this.cast.push(actor);
	}

	actorDeselec(actor: Actor) {
		if (actor !== null && this.cast.includes(actor)) {
			const index = this.cast.indexOf(actor);
			this.cast.splice(index, 1);
		}
	}

	imagen($event: any) {
		this.imgFile = $event.target.files[0];
	}
}
