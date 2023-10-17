import { Component } from '@angular/core';
import { Actor } from 'src/app/classes/actor';
import { DatabaseService } from 'src/app/services/database.service';
import Swal from 'sweetalert2';
import isEmail from 'validator/lib/isEmail';

@Component({
	selector: 'app-actor-alta',
	templateUrl: './actor-alta.component.html',
	styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent {
	firstName: string = "";
	lastName: string = "";
	email: string = "";
	country: any;
	countryDisplay: string = "";

	constructor(private dbService: DatabaseService) { }

	paisSelec(pais: any) {
		if (pais !== null && pais.translations.spa.common !== null)
			this.country = pais;
		this.countryDisplay = pais.translations.spa.common + ', ' + pais.cca3;
	}

	guardarActor() {
		if (this.firstName == "" || this.lastName == "" ||
			(this.email !== "" && !isEmail(this.email)) || this.country == undefined) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Revise los datos ingresados.',
			});
			return;
		}

		let actor = new Actor("", this.firstName, this.lastName, this.email, this.country.cca3);
		if (this.dbService.agregarActor(actor)) {
			Swal.fire({
				icon: 'success',
				title: 'Hecho!',
				text: 'El actor fue agregado con éxito!',
			});
			this.borrarValores();
		} else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Hubo un problema al agregar al actor.',
			});
		}
	}

	borrarValores() {
		this.firstName = "";
		this.lastName = "";
		this.email = "";
		this.country = undefined;
		this.countryDisplay = "";
	}
}
