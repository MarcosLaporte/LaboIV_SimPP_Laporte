import { Component } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Pelicula } from './classes/pelicula';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'LaboIV_SimPP_Laporte';
	constructor(private firestore: Firestore) { }

	ngOnInit() {
		const col = collection(this.firestore, 'pelis');
		let pelicula = {
			id: 2,
			nombre: 'V for Vendetta',
			tipo: 'otros',
			estreno: 2005,
			audiencia: 200,
			fotoSrc: ''
		};

		addDoc(col, pelicula);
	}
}
