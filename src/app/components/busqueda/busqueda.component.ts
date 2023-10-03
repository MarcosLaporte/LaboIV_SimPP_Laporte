import { Component, ViewEncapsulation } from '@angular/core';
import { Pelicula } from 'src/app/classes/pelicula';

@Component({
	selector: 'app-busqueda',
	templateUrl: './busqueda.component.html',
	styleUrls: ['./busqueda.component.css'],
	encapsulation: ViewEncapsulation.None,
})
export class BusquedaComponent {
	peliculaSelec: Pelicula | undefined;

	getPeli(peli: Pelicula) {
		if (peli !== undefined)
			this.peliculaSelec = peli;
	}
}
