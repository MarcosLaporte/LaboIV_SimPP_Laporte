import { Component, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/classes/actor';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
	selector: 'app-actor-listado',
	templateUrl: './actor-listado.component.html',
	styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent {
	@Output() actorEvent = new EventEmitter<any>();
	actores: Array<Actor> = [];
	
	constructor(private dbService: DatabaseService) { }

	async ngOnInit() {
		const arrAux = await this.dbService.traerDatos<Actor>('actores');
		this.actores = arrAux;
	}

	selecActor(actor: any) {
		this.actorEvent.emit(actor);
	}
}
