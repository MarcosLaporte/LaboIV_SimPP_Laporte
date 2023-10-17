import { Component, Output, EventEmitter } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent {
	@Output() paisEvent = new EventEmitter<any>();
	paises: Array<any> = [];

	constructor(private paisServ: PaisesService) {}

	ngOnInit(){
		const req = this.paisServ.traerPaises();

		req.subscribe((res) => {
			let arrAux = res as Array<any>;
			arrAux.sort((a, b) => a.translations.spa.common > b.translations.spa.common ? 1 : -1);

			this.paises = arrAux;
		});
	}

	selecPais(pais: any) {
		this.paisEvent.emit(pais);
	}
}
