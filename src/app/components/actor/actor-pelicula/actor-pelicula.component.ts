import { Component } from '@angular/core';
import { DocumentReference, Timestamp } from '@angular/fire/firestore';
import { Actor } from 'src/app/classes/actor';
import { Pelicula } from 'src/app/classes/pelicula';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
	selector: 'app-actor-pelicula',
	templateUrl: './actor-pelicula.component.html',
	styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent {
	actorSelec: Actor | undefined;
	paisActor: string = '';

	infoActor($event: any) {
		this.actorSelec = $event as Actor;
		this.paisActor = $event.pais;
	}
}
