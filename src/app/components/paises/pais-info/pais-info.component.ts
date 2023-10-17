import { Component, Input, SimpleChange } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
	selector: 'app-pais-info',
	templateUrl: './pais-info.component.html',
	styleUrls: ['./pais-info.component.css']
})
export class PaisInfoComponent {
	@Input() paisSelec: string | undefined;
	infoPais: { [key: string]: string } = {};

	constructor(private paisServ: PaisesService) { }

	ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
		if (changes['paisSelec']) {
			this.getInfoPais();
		}
	}

	getInfoPais() {
		if (this.paisSelec !== undefined) {
			const req = this.paisServ.traerPais(this.paisSelec);

			req.subscribe((res) => {
				const pais = (res as Array<any>)[0];
				this.infoPais['spaName'] = pais.translations.spa.common;
				this.infoPais['cca3'] = pais.cca3;
				this.infoPais['capital'] = pais.capital[0];
				this.infoPais['subregion'] = pais.subregion;
				this.infoPais['flag'] = pais.flags.svg;
			});

		}
	}
}
