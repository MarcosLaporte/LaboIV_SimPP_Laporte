import { Component } from '@angular/core';
import { Firestore, collection, CollectionReference, doc, setDoc, collectionData } from '@angular/fire/firestore';
import { Actor } from 'src/app/classes/actor';
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
	country: string = "";
	readonly dbPath = 'actores';
	readonly col: CollectionReference;

	constructor(private firestore: Firestore) {
		this.col = collection(this.firestore, this.dbPath);
	}

	paisSelec(pais: any) {
		if (pais.translations.spa.common !== null)
			this.country = pais.translations.spa.common;
	}

	guardarActor() {
		if (this.firstName == "" || this.lastName == "" ||
			(this.email !== "" && !isEmail(this.email)) || this.country == "") {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Revise los datos ingresados',
			});
			return;
		}

		let actor = new Actor("", this.firstName, this.lastName, this.email, this.country);
		if (this.agregarActor(actor)) {
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

	agregarActor(actor: Actor): boolean {
		const nuevoDoc = doc(this.col);

		try {
			setDoc(nuevoDoc, {
				id: nuevoDoc.id,
				nombre: actor.nombre,
				apellido: actor.apellido,
				email: actor.email,
				pais: actor.pais
			});
		} catch (error) {
			console.log(error);
			return false;
		}

		return true;
	}

	traerActores(): Array<any> {
		let arrAux: Array<any> = [];
		const obs = collectionData(this.col);

		obs.subscribe((res) => {
			arrAux = res as Array<any>;
		});

		return arrAux;
	}

	borrarValores(){
		this.firstName = "";
		this.lastName = "";
		this.email = "";
		this.country = "";
	}
}
