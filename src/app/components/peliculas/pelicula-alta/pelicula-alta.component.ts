import { Component } from '@angular/core';
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

	async guardarPeli() {
		if (this.title == "" || this.genre == "" || this.releaseDate == null ||
			this.audience == null || !(this.imgFile instanceof File) || this.actor == undefined) {
			Swal.fire('Oops...', 'Revise los datos ingresados.', 'error');
			return;
		}

		const docRef = this.dbService.agregarPelicula(this.title, generos[this.genre], new Date(this.releaseDate), this.audience, this.actor);
		if (docRef !== null) {
			Swal.fire({
				imageUrl: '../../../../assets/loader.gif',
				imageWidth: 300,
				imageHeight: 300,
				imageAlt: 'loader',
				showConfirmButton: false,
				allowOutsideClick: false
			});
			const imgUrl = await this.stService.subirImagen(this.imgFile, `peliculas/${docRef?.id}`);
			Swal.close();
			if (imgUrl !== undefined) {
				this.dbService.agregarFotoUrl(docRef, imgUrl);
				Swal.fire('Hecho!', 'La película fue agregada con éxito!', 'success');
				this.borrarValores();
			} else {
				Swal.fire('Oops...', 'Hubo un problema con la imagen.', 'error');
			}
		} else {
			Swal.fire('Oops...', 'Hubo un problema al agregar la película.', 'error');
		}
	}

	borrarValores() {
		this.title = "";
		this.genre = "";
		this.releaseDate = new Date();
		this.audience = 0;
		this.actor = undefined;
		this.imgFile = undefined;
		this.inputFileText = "Seleccione el póster de la película";

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
