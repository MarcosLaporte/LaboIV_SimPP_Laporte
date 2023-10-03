import { Component, ViewEncapsulation } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Pelicula } from './classes/pelicula';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
	title = 'LaboIV_SimPP_Laporte';
	constructor(private firestore: Firestore) { }
}
