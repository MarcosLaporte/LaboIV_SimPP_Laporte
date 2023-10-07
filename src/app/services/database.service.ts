import { Injectable } from '@angular/core';
import { CollectionReference, Firestore, collection, collectionData, doc, setDoc } from '@angular/fire/firestore';
import { Actor } from '../classes/actor';
import { Pelicula } from '../classes/pelicula';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private firestore: Firestore) {}

	traerDatos(dbPath: string): Array<any> {
		const col = collection(this.firestore, dbPath);
		let arrAux: Array<any> = [];
		const obs = collectionData(col);

		obs.subscribe((res) => {
			arrAux = res as Array<any>;
		});

		return arrAux;
	}

	agregarActor(actor: Actor): boolean {
		const col = collection(this.firestore, 'actores');
		const nuevoDoc = doc(col);

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
	
	agregarPelicula(pelicula: Pelicula): boolean {
		const col = collection(this.firestore, 'pelis');
		const nuevoDoc = doc(col);

		try {
			setDoc(nuevoDoc, {
				id: nuevoDoc.id,
				nombre: pelicula.nombre,
				tipo: pelicula.tipo,
				estreno: pelicula.estreno,
				audiencia: pelicula.audiencia,
				elenco: pelicula.elenco,
				fotoSrc: pelicula.fotoSrc,
			});
		} catch (error) {
			console.log(error);
			return false;
		}

		return true;
	}

	
}
