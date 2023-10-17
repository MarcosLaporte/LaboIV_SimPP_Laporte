import { Component, Input } from '@angular/core';
import { DocumentReference, Timestamp } from '@angular/fire/firestore';
import { Actor } from 'src/app/classes/actor';
import { Pelicula } from 'src/app/classes/pelicula';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-actor-datos',
  templateUrl: './actor-datos.component.html',
  styleUrls: ['./actor-datos.component.css']
})
export class ActorDatosComponent {
	actores: Array<Actor> = [];
	@Input() actor: Actor | undefined;

	constructor(private dbService: DatabaseService) { }

	async ngOnInit() {
		const arrAux = await this.dbService.traerDatos<Actor>('actores');

		this.actores = arrAux;
	}
}
