import { Component, Input, SimpleChange } from '@angular/core';
import { DocumentReference, Timestamp } from '@angular/fire/firestore';
import { Actor } from 'src/app/classes/actor';
import { Pelicula } from 'src/app/classes/pelicula';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
	selector: 'app-pelicula-listado',
	templateUrl: './pelicula-listado.component.html',
	styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent {
	peliculas: Array<Pelicula> = [];
	@Input() actorSelec: Actor | undefined;
	pelisActor: Array<Pelicula> = [];

	constructor(private dbService: DatabaseService) { }

	async ngOnInit() {
		const arrAux = await this.dbService.traerDatos<Pelicula>('pelis');
		arrAux.forEach(async peli => {
			peli.estreno = peli.estreno instanceof Timestamp ? peli.estreno.toDate() : peli.estreno;
			peli.actor = peli.actor instanceof DocumentReference ? await this.dbService.traerObjPorRef<Actor>(peli.actor) : peli.actor;
		});

		this.peliculas = arrAux;
		if (this.actorSelec != undefined)
			this.pelisActor = this.filtrarPorActor(this.actorSelec);
	}

	ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
		if (changes['actorSelec'] && this.actorSelec !== undefined) {
			this.pelisActor = this.filtrarPorActor(this.actorSelec);
		}
	}

	filtrarPorActor(actor: Actor) {
		return this.peliculas.filter((peli) => {
			return peli.actor.id == actor?.id
		});
	}
}
