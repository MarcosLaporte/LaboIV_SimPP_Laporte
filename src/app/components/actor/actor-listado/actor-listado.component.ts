import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Actor } from 'src/app/classes/actor';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
	selector: 'app-actor-listado',
	templateUrl: './actor-listado.component.html',
	styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent { 
	@Input() liClass: string = "";
	@Input() ulClass: string = "";
	@Output() actorEvent = new EventEmitter<any>();
	actores: Array<Actor> = [];
	
	constructor(private dbService: DatabaseService) { }

	async ngOnInit() {
		const arrAux = await this.dbService.traerDatos<Actor>('actores');
		arrAux.sort((a, b) => `${a.nombre} ${a.apellido}` > `${b.nombre} ${b.apellido}` ? 1 : -1);
		this.actores = arrAux;
	}

	selecActor(actor: any) {
		this.actorEvent.emit(actor);
	}
}
