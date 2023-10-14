import { Component } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { Actor } from 'src/app/classes/actor';
import { generos } from 'src/app/classes/pelicula';
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
	releaseDate: Date = new Date();
	audience: number = 0;
	actor: Actor | undefined;
	fotoUrl: string = "";
	imgFile: File | undefined;
	inputFileText: string = "Seleccione el póster de la película";

	constructor(private dbService: DatabaseService, private stService: StorageService) { }

	dicToObjArray(dictionary: { [key: string]: string }): { key: string; value: string }[] {
		return Object.entries(dictionary).map(([key, value]) => ({ key, value }));
	}

	guardarPeli() {
		if (this.title == "" || this.genre == "" || this.releaseDate == null ||
			this.audience == null || !(this.imgFile instanceof File) || this.actor == undefined) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Revise los datos ingresados.',
			});
			return;
		}

		const idPeli = this.dbService.agregarPelicula(this.title, generos[this.genre], new Date(this.releaseDate), this.audience, this.actor, this.fotoUrl);
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
		this.releaseDate = new Date();
		this.audience = 0;
		this.actor = undefined;
		this.imgFile = undefined;
	}

	actorSelec(actor: any) {
		const auxActor = actor as Actor;
		if (auxActor !== null)
			this.actor = auxActor;
	}

	actorDeselec(actor: Actor) {
		if (actor !== null)
			this.actor = undefined;
	}

	imagen($event: any) {
		const auxFile: File = $event.target.files[0];
		if (!auxFile.type.startsWith('image')) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Debe elegir un archivo de tipo imagen'
			});
			return;
		}

		this.imgFile = auxFile;
		this.inputFileText = this.imgFile !== undefined ? this.imgFile?.name : "Hubo un error con la imagen :( Seleccione otra.";
	}
}
